import {Injectable} from '@angular/core';

@Injectable()
export class ApikeyService {

  public keys : any;

  constructor() {

    this.keys = {
      maps : {
        key : 'askgooglemapskey'
      },
      weather : {
        key : 'openweathermap'
      }
    }; 
  }

  getKeys(){
    return this.keys;
  }

  getKey(name){
    return this.keys[name];
  }

}
