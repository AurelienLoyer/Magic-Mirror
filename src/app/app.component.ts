import {Component, OnInit} from "@angular/core";
import {WeatherComponent} from "./weather/weather.component";
import {ClockComponent} from "./clock/clock.component";
import {ViewEncapsulation} from '@angular/core';

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls: ["./app/app.css"],
    encapsulation: ViewEncapsulation.None,
    directives : [WeatherComponent,ClockComponent]
})

export class AppComponent implements OnInit {

    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
