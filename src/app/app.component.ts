import {Component, OnInit,ElementRef} from "@angular/core";
import {ViewEncapsulation} from '@angular/core';

import {WeatherComponent} from "./weather/weather.component";
import {WeatherService} from './weather/services/weather.service';
import {WeatherIconComponent} from "./weather_icon/weather_icon.component";
import {ClockComponent} from "./clock/clock.component";
import {CarComponent} from "./car/car.component";
import {VlilleComponent} from "./vlille/vlille.component";
import {DateTimeComponent} from "./datetime/datetime.component";
import {MessageComponent} from "./message/message.component";
import {HomeComponent} from "./home/home.component";
import {SocialComponent} from "./social/social.component";

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls: ["./app/app.css"],
    encapsulation: ViewEncapsulation.None,
    directives : [
      WeatherComponent,
      ClockComponent,
      WeatherIconComponent,
      CarComponent,
      DateTimeComponent,
      VlilleComponent,
      MessageComponent,
      HomeComponent,
      SocialComponent
    ],
    providers: [WeatherService]
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
