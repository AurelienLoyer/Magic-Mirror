import {Injectable} from '@angular/core';
import {Http,Headers,Jsonp} from '@angular/http';

@Injectable()
export class CarService {

  public api_url : String = "http://localhost/Perso/domoticz_scripts/xee-car-data-to-domoticz-php/xee.php?data=";
  public http : any;
  public jsonp : any;

  constructor( jsonp : Jsonp, http : Http) {
    this.http = http;
    this.jsonp = jsonp;
  }

  getCarData(data){
    return this.http
      .get(this.api_url+data)
      .map(res => res.json());
  }
}
