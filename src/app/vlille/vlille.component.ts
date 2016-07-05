import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {NgStyle} from '@angular/common';
import {XmlParsePipe} from '../pipes/xmlparse.pipe';
import {VlilleService} from './vlille.service';
import { Observable}       from 'rxjs/Observable';

@Component({
    selector: "vlille",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/vlille/vlille.html",
    styleUrls:["./app/vlille/vlille.css"],
    providers: [VlilleService],
    pipes : [XmlParsePipe]
})

export class VlilleComponent implements OnInit{

  public _sRotate: string = "1";
  public items: Observable<any[]>;

  constructor(private vlilleservice: VlilleService) {
  }

  ngOnInit(){
    console.log('Init VLille');
    //this.items = this.vlilleservice.getBorneData('36');
    //console.log(this.items);
  }
}
