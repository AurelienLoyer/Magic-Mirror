import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';
import {XmlParsePipe} from '../pipes/xmlparse.pipe';
import {VlilleService} from './vlille.service';
import {Observable}       from 'rxjs/Rx';
import {Http,Headers,Jsonp} from '@angular/http';


@Component({
    selector: "vlille",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/vlille/vlille.html",
    styleUrls:["./app/vlille/vlille.css"],
    providers: [VlilleService],
    pipes : [XmlParsePipe]
})

export class VlilleComponent implements OnInit{

  public stationids : any[] = [];
  public stations : any[] = [];
  public http : Http;

  constructor(private vlilleservice: VlilleService) {
    this.stationids = [
      {name:'Cormontaigne',id:36},
      {name:'Rihour',id:10}
    ];
  }

  ngOnInit(){
    console.log('Init VLille');
    Observable
      .from(this.stationids)
      .flatMap((i) => this.vlilleservice.getBorneData(i))
      .subscribe((o) => {
        this.stations.push(o);
      });
  }

}
