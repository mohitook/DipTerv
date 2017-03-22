import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import {AF} from "./providers/af";

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyA5F2tA1GRgsyJNReTuxuyQC20WrpDRSy4",
  authDomain: "dipterv-f7bce.firebaseapp.com",
  databaseURL: "https://dipterv-f7bce.firebaseio.com",
  storageBucket: "dipterv-f7bce.appspot.com",
  messagingSenderId: "920667940828"
};

@NgModule({
    imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)],
    declarations: [AppComponent],
    providers: [AF],
    bootstrap: [AppComponent]
})
export class AppModule { }
