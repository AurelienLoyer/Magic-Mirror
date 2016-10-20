import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
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
import { ApikeyService } from './apikey/apikey.service';
import { XmlParsePipe } from './pipes/xmlparse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    VlilleComponent,
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
    XmlParsePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CarService,
    ApikeyService,
    VlilleService,
    WeatherService,
    CalendarService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
