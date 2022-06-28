import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, withLatestFrom, from } from 'rxjs';
import {
  loadReservation,
  setReservation,
  changeReservation,
} from "../actions/reservation.actions";
import { selectReservation} from "../selectors/reservation.selector";
import {ReservationDTO} from "../dto/reservation.dto";
import {ReservationStateModel} from "../models/reservation-state.models";
import {ReservationChangeModel} from "../models/reservation.models";

@Injectable()
export class ReservationEffects {

  loadReservation$ = createEffect(() => this.actions$.pipe(
    ofType(loadReservation),
    withLatestFrom(this.store.select(selectReservation)),
    mergeMap(([action,state]) => {
      // @ts-ignore
      return from(this.getReservation(state))
        .pipe(map((reservation) => setReservation({ reservation })
      ));
    })
  ));

  changeReservation$ = createEffect(() => this.actions$.pipe(
    ofType(changeReservation),
    withLatestFrom(this.store.select(selectReservation)),
    mergeMap(([action,state]) => {
      // @ts-ignore
      return from(this.updateReservation(state, action))
        .pipe(map((reservation) => setReservation({ reservation })
      ));
    })
  ));

  constructor(
    private actions$: Actions,
    private store: Store,
  ) {}

  getReservation(reservation: ReservationStateModel): ReservationDTO {
    return new ReservationDTO(reservation.reservation);
  }

  updateReservation(reservation: ReservationDTO, changes: ReservationChangeModel) {
    console.log(`Reservation is - ${reservation} and changes is ${changes.name} - val ${changes.value}`);
    return this.getReservation({
      ...(reservation as any),
      [changes.name]: changes.value,
    });
  }
}
