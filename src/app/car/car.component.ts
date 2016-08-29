import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';
import {CarService} from './car.service';
import {Observable} from 'rxjs/Rx';
import {ApikeyService} from './../apikey/apikey.service';

@Component({
    selector: "car",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/car/car.html",
    styleUrls:["./app/car/car.css"],
    directives: [],
    providers: [CarService,ApikeyService]
})

export class CarComponent implements OnInit{

  public lat:number;
  public lng:number;
  public latCar:number;
  public lngCar:number;
  public zoom:number;
  public map:any;
  public styles:any;
  public loop:any;
  public state:string;
  public carIcon:string;
  public positionInfoMarker:string;
  public positionInfo:string;
  public fuelLevel : number;
  public fuelRange : number;
  public trips : any[] = [];
  public apikey : String;
  public interval : number;

  constructor(public elementRef:ElementRef,private carService : CarService, private apikeyService : ApikeyService) {
    this.interval = 10000; // 10 secondes
    this.lat = 50.631941;
    this.lng = 3.057928;
    this.latCar = 50.626301;
    this.lngCar = 3.032630;
    this.zoom = 12;
    this.map = elementRef.nativeElement.querySelector("#gmap");
    this.carIcon = "app/assets/ds3_40px.png";
    this.styles = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#ed5929"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#ed5929"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ed5929"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#ed5929"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
    this.positionInfoMarker = "fa-car";//fa-map-marker
    this.positionInfo = "La voiture est en déplacement"//La voiture est au garage
    this.apikey = apikeyService.getKey('maps');
  }

  ngOnInit(){
    //this.moveCar();
    //getCarData()
    //trips
    //car
    this.getTrips();
    this.getCardata();

    /*setInterval(() => {
      this.getTrips();
      this.getCardata();
    }, this.interval);*/

  }

  changeState(state){
    //garage
    //moveLille
    //moveOutside
    this.state = state;
  }

  centerMap(){
    //map.getBounds().contains(marker.getPosition())
  }

  getTrips(){
    this.carService.getCarData('trips')
    .map(function(res){
      for (let i = 0; i < res.length; i++) {
          res[i].beginDate = new Date(res[i].beginDate);
          res[i].distance = 0;
      }
      return res;
    }).subscribe((o) => {
      this.trips = [];
      this.trips.push(o[o.length-1]);
      this.trips.push(o[o.length-2]);
      //on recupere les distances des trajets
      this.getTripsDistance();
    });
  }

  getTripsDistance(){
    var i = 0;
    Observable
      .from(this.trips)
      .flatMap((trip) => this.carService.getCarData('trip&trip_id='+trip.id))
      .subscribe((o) => {
        var signals = o;
        var min = 10000000;
        var max = 0;
        for (let i = 0; i < signals.length; i++) {
          if(signals[i].name === "Odometer"){
            if(signals[i].value < min){
              min = signals[i].value;
            }
            if(signals[i].value > max){
              max = signals[i].value;
            }
          }
        }
        this.trips[i].distance = max - min;
        i++;
      });

  }

  getCardata(){
    this.carService.getCarData('car')
    .subscribe((data) => {
      //location
      this.latCar = data.location.latitude;
      this.lngCar = data.location.longitude;
      //signals
      var signals = data.signals;
      for (let i = 0; i < signals.length; i++) {
          if(signals[i].name === "FuelLevel"){
            this.fuelLevel = signals[i].value;
            this.fuelRange = Math.round(this.fuelLevel/10);
          }
      }
    });
  }

  //test fonction deplacement voiture
  moveCar(){
    this.loop = setInterval(()=>{
      if(this.state === "garage"){
        this.latCar = 50.626301;
        this.lngCar = 3.032630;
      }else if(this.state === "moveLille"){
        this.lngCar = this.lngCar+0.0003;
      }else if(this.state === "moveOutside"){
        this.lngCar = this.lngCar-0.0003;
      }else{
        this.latCar = 50.626301;
        this.lngCar = 3.032630;
      }
    }, 1000);
  }

}
