import {Injectable} from '@angular/core';
import {Http,Headers,Jsonp} from '@angular/http';

@Injectable()
export class VlilleService {

  //view-source:http://vlille.fr/stations/xml-stations.aspx
  //http://vlille.fr/stations/xml-station.aspx?borne=10 //station rihour
  //http://vlille.fr/stations/xml-station.aspx?borne=36 //station cormontaigne

  public api_url : String = "http://vlille.fr/stations/xml-station.aspx";
  public http : any;
  public jsonp : any;

  constructor( jsonp : Jsonp, http : Http) {
    this.http = http;
    this.jsonp = jsonp;
  }

  getBorneData(borne) {

    return this.jsonp.request(this.api_url+'?callback=JSONP_CALLBACK&format=xml&borne='+borne, {method:'GET',dataType:'text'});
  }
}