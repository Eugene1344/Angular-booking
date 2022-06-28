import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from "./components/reservation/reservation.component";
import { StoreModule } from "@ngrx/store";
import { reservationReducer } from "./store/reducers/reservation.reduces";
import { EffectsModule } from '@ngrx/effects';
import { ReservationEffects } from "./store/effects/reservation.effects";
import { OfferComponent } from './components/reservation/offer/offer.component';
import { ConfirmComponent } from './components/reservation/confirm/confirm.component';
import { ConditionComponent } from './components/reservation/condition/condition.component';
import { offersReducer } from "./store/reducers/offers.reducers";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ReservationComponent,
    AppComponent,
    OfferComponent,
    ConfirmComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ reservation: reservationReducer , offers: offersReducer}),
    EffectsModule.forRoot([ ReservationEffects ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
