import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
    selector: "message",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/message/message.html",
    styleUrls:["./app/message/message.css"],
    directives: [],
    pipes:[]
})

export class MessageComponent implements OnInit{

  public texte_1: string;
  public texte_2: string;

  constructor() {
    this.texte_1 = "Bonjour";
    this.texte_2 = "Aurélien";
  }

  ngOnInit(){
    console.log('Init Message');
  }
}
