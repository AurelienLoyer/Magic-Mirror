import {Injectable} from '@angular/core';
import {Http,Headers,Jsonp} from '@angular/http';

@Injectable()
export class VlilleService {

  //view-source:http://vlille.fr/stations/xml-stations.aspx
  //http://vlille.fr/stations/xml-station.aspx?borne=10 //station rihour
  //http://vlille.fr/stations/xml-station.aspx?borne=36 //station cormontaigne

  public api_url : String = "http://api.aurelien-loyer.fr/vlille/station.php?key=magdalena";
  public http : any;
  public jsonp : any;

  constructor( jsonp : Jsonp, http : Http) {
    this.http = http;
    this.jsonp = jsonp;
  }

  getBorneData(borne){
    return this.http
      .get(this.api_url+'&format=jsonp&json_callback=JSON_CALLBACK&borne='+borne.id)
      .map(function(res){
        var response = res.json();
        response.name = borne.name;
        return response;
      });
  }
}
