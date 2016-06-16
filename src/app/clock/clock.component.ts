import {Component, OnInit} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';


@Component({
    selector: "clock",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/clock/clock.html",
    styleUrls:["./app/clock/clock.css"]
})

export class ClockComponent implements OnInit{

  public _sRotate: string = "1";
  public _mRotate: string = "1";
  public _hRotate: string = "1";

  constructor() {
  }

  ngOnInit(){
    console.log('ngOnInit');
    setInterval(() => {
      this.clockUpdate();
    }, 1000);
  }

  clockUpdate() {
    var d = new Date();
    var minutes = d.getMinutes()*6;
    var hours = d.getHours()%12/12*360+(minutes/12);
    var secondes = d.getSeconds()*6;
    this._sRotate = "rotate("+secondes+"deg)";
    this._mRotate = "rotate("+minutes+"deg)";
    this._hRotate = "rotate("+hours+"deg)";
  }

}
