import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BixiService {

  //stations informations: https://api-core.bixi.com/gbfs/fr/station_information.json
  //stations status: https://api-core.bixi.com/gbfs/fr/station_information.json
 
  public api_url : string = "https://api-core.bixi.com/gbfs/fr/station_status.json";

  constructor(public http : Http) {
  }

  getBorneData(borne){
    return this.http
      .get(this.api_url)
      .map(function(res){
        const response = res.json();
        return response.data.stations.filter(station => {
          station.name = borne.name;
          return station.station_id === borne.id
        });
      });
  }
  
}
