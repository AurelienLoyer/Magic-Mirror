import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
    selector: "social",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/social/social.html",
    styleUrls:["./app/social/social.css"],
    directives: []
})

export class SocialComponent implements OnInit{

  public _sRotate: string = "1";

  constructor() {
  }

  ngOnInit(){
    console.log('Init Social');
  }
}
