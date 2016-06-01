import {Component, OnInit} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';


import {WeatherComponent} from "./weather/weather.component";
import {WeatherService} from './weather/services/weather.service';
import {WeatherIconComponent} from "./weather_icon/weather_icon.component";
import {ClockComponent} from "./clock/clock.component";

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls: ["./app/app.css"],
    encapsulation: ViewEncapsulation.None,
    directives : [WeatherComponent,ClockComponent,WeatherIconComponent],
    providers: [WeatherService]
})

export class AppComponent implements OnInit {

    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
