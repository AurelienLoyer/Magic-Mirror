import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ConfigService {

  public conf : any;

  constructor(public http : Http) {
     this.conf = this.http.get("/config.json")
      .map(res => res.json());
  }

  getConf(){
    return this.conf;
  }

  getConfParameter(parameter){
    return this.conf[parameter];
  }

}
