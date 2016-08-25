import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class WeatherService {

  public api_url : String = "http://api.openweathermap.org/data/2.5/forecast";
  public key : String = "macle";
  public key_url : String;
  public requestUrl : String;
  public params : String = "&q=Lille,Fr&units=metric";
  public http : any;

  constructor( http:Http) {
    this.http = http;
    this.key_url = '?APPID='+this.key;
    this.requestUrl = this.api_url+''+this.key_url+''+this.params;
  }
  get() {
      return this.http.get(this.requestUrl);
  }
}
