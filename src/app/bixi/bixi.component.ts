import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {XmlParsePipe} from '../pipes/xmlparse.pipe';
import {BixiService} from './bixi.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'bixi',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bixi.component.html',
  styleUrls: ['./bixi.component.scss']
})

export class BixiComponent implements OnInit{

  public stationids : any[] = [];
  public stations : any[] = [];
  public interval : number;

  constructor(private bixiservice: BixiService) {
    this.stationids = [
      {name:'St-Jacques / St-Pierre',id:'39'},
      {name:'Métro Mont-Royal',id:'184'}
    ];
    this.interval = 30000; // secondes
  }

  ngOnInit(){
    console.log('ngOnInit');

    this.getBornesData();

    setInterval(() => {
      this.getBornesData();
    }, this.interval);
  }

  getBornesData(){
    this.stations = [];
    Observable
      .from(this.stationids)
      .flatMap((i) => this.bixiservice.getBorneData(i))
      .subscribe((o) => {
        this.stations.push(o[0]);
      });
  }

}
