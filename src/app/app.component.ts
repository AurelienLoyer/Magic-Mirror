import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';


import {WeatherComponent} from "./weather/weather.component";
import {WeatherService} from './weather/services/weather.service';
import {WeatherIconComponent} from "./weather_icon/weather_icon.component";
import {ClockComponent} from "./clock/clock.component";
import {CarComponent} from "./car/car.component";


@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls: ["./app/app.css"],
    encapsulation: ViewEncapsulation.None,
    directives : [WeatherComponent,ClockComponent,WeatherIconComponent,CarComponent],
    providers: [WeatherService]
})

export class AppComponent implements OnInit {

    ngOnInit() {
        console.log("Application component initialized ...");
    }


}
