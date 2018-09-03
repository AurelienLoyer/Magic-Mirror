import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { BixiComponent } from './bixi/bixi.component';
import { BixiService } from './bixi/bixi.service';
import { VlilleComponent } from './vlille/vlille.component';
import { VlilleService } from './vlille/vlille.service';
import { AddZeroPipe } from './pipes/addzero.pipe';
import { FirstletterupperPipe } from './pipes/firstletterupper.pipe';
import { CarComponent } from './car/car.component';
import { CarService } from './car/car.service';
import { ClockComponent } from './clock/clock.component';
import { DateTimeComponent } from './datetime/datetime.component';
import { HomeComponent } from './home/home.component';
import { SocialComponent } from './social/social.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarService } from './calendar/calendar.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { ApiService } from './api/api.service';
import { XmlParsePipe } from './pipes/xmlparse.pipe';
import { TwitterComponent } from './twitter/twitter.component';
import { TwitterService } from './twitter/twitter.service';
import { ConfigService } from './config/config.service';
import { HydroquebecComponent } from './hydroquebec/hydroquebec.component';
import { CameraComponent } from './camera/camera.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    VlilleComponent,
    BixiComponent,
    AddZeroPipe,
    FirstletterupperPipe,
    CarComponent,
    ClockComponent,
    DateTimeComponent,
    HomeComponent,
    SocialComponent,
    CalendarComponent,
    WeatherComponent,
    WeatherIconComponent,
    XmlParsePipe,
    TwitterComponent,
    HydroquebecComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
  providers: [
    CarService,
    ApiService,
    VlilleService,
    BixiService,
    WeatherService,
    CalendarService,
    TwitterService,
    ConfigService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
