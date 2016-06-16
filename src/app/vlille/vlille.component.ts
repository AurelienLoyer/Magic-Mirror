//view-source:http://vlille.fr/stations/xml-stations.aspx
//http://vlille.fr/stations/xml-station.aspx?borne=10 //station rihour
//http://vlille.fr/stations/xml-station.aspx?borne=36 //station cormontaigne

import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
    selector: "vlille",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/vlille/vlille.html",
    styleUrls:["./app/vlille/vlille.css"],
    directives: []
})

export class VlilleComponent implements OnInit{

  public _sRotate: string = "1";

  constructor() {
  }

  ngOnInit(){
    console.log('Init VLille');
  }
}
