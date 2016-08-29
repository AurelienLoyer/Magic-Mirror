import {Component, OnInit} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';
import {Jsonp} from '@angular/http';

import {WeatherService} from '../weather/weather.service';
import {FirstLetterUpper} from '../pipes/firstletterupper.pipe';

@Component({
    selector: "weather-icon",
    templateUrl: "./app/weather_icon/weather_icon.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls:["./app/weather_icon/weather_icon.css"],
    providers: [WeatherService],
    pipes:[FirstLetterUpper]
})

export class WeatherIconComponent implements OnInit{

  public current_weather_type : String = "";
  public weather_types : Array<Object> = [];
  public weather_object : any;
  public weather_temp : number = 0;

  constructor(private weatherService: WeatherService){
    this.weather_types.push("sun-shower");
    this.weather_types.push("thunder-storm");
    this.weather_types.push("cloudy");
    this.weather_types.push("sunny");
    this.weather_types.push("rainy");
    this.weather_types.push("flurries");
  }

  ngOnInit(){
    console.log('Init weather icon');
    setInterval(() => {
      //this.setWeatherType("");
    }, 2000);

    this.weatherService.getCurrent()
    .subscribe(res => {
      this.weather_temp = Math.round(res.main.temp);
      this.setWeatherType(res.weather[0].main);
      console.log(res.main.temp);
    });
  }

  randomType(){
    var randomInt = Math.floor(Math.random() * this.weather_types.length);
    return this.weather_types[randomInt];
  }

  setWeatherType(type) {
    if(!type){
      type = this.randomType();
    }
    this.current_weather_type = type;
  }

}
