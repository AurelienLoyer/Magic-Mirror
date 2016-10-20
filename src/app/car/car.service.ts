import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CarService {

  // Projet Github
  // @t3kstiil3
  // https://github.com/T3kstiil3/Domoticz_Scripts/tree/master/xee-car-data-to-domoticz-php
  public api_url : String = "http://localhost/Perso/domoticz_scripts/xee-car-data-to-domoticz-php/xee.php?data=";

  constructor(public http : Http) {
  }

  getCarData(data){
    return this.http
      .get(this.api_url+data)
      .map(res => res.json());
  }
}
