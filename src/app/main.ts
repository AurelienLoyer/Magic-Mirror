/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/browser/ambient/es6-shim/index.d.ts"/>

import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";

import {HTTP_PROVIDERS,JSONP_PROVIDERS} from '@angular/http';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  JSONP_PROVIDERS
]);


//useFactory
