//Remove exemple. in the filename :)

import {Injectable} from '@angular/core';

@Injectable()
export class ApikeyService {

  public keys : any;

  constructor() {

    this.keys = {
      maps : {
        key : 'YOUR_MAPS_API_KEY'
      },
      weather : {
        key : 'YOUR_FREE_OPENWEATHER_API_KEY'
      }
    };
  }

  getKeys(){
    return this.keys;
  }

  getKey(name){
    return this.keys[name].key;
  }

}
