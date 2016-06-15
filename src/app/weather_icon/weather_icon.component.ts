import {Component, OnInit} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {Jsonp} from '@angular/http';

import {WeatherService} from '../weather/services/weather.service';
import {FirstLetterUpper} from '../pipes/firstletterupper.pipe';

@Component({
    selector: "weather-icon",
    templateUrl: "./app/weather_icon/weather_icon.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls:["./app/weather_icon/weather_icon.css"],
    providers: [WeatherService],
    pipes:[FirstLetterUpper]
})

export class WeatherIconComponent implements OnInit{

  public current_weather_type : String = "";
  public weather_types : Array<Object> = [];
  public weather_object : any;

  constructor(private weatherService: WeatherService){
    this.weather_types.push("sun-shower");
    this.weather_types.push("thunder-storm");
    this.weather_types.push("cloudy");
    this.weather_types.push("sunny");
    this.weather_types.push("rainy");
    this.weather_types.push("flurries");
  }

  ngOnInit(){
    console.log('ngOnInit');
    setInterval(() => {
      this.setWeatherType('rainy');
    }, 2000);

    /*this.weatherService.get().subscribe(function (res) {
      this.weather_object = JSON.parse(res._body);
      console.log(this.weather_object);
    });*/
  }

  randomType(){
    var randomInt = Math.floor(Math.random() * this.weather_types.length);
    return this.weather_types[randomInt];
  }

  setWeatherType(type) {
    if(!type){
      type = this.randomType();
    }
    this.current_weather_type = type;
  }

}
