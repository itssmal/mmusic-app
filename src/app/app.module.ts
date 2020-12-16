import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {IonicStorageModule} from "@ionic/storage";
import {AppInterceptor} from "./core/interceptors/interceptor";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      CommonModule,
      BrowserModule,
      IonicModule.forRoot({
        mode: 'ios'
      }),
      AppRoutingModule,
      HttpClientModule,
      IonicStorageModule.forRoot()
  ],
  providers: [
  {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
  },
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
