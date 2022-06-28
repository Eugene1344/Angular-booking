import {createReducer, on, props} from '@ngrx/store';
import {
  changeReservation,
  loadReservation,
  setReservation,
  nextReservation,
  backReservation
} from "../actions/reservation.actions";
import {ReservationChangeModel, NextReservationModel } from "../models/reservation.models";
import {ReservationStateModel} from "../models/reservation-state.models";
import {ReservationDTO} from "../dto/reservation.dto";

const initialState: ReservationStateModel = {
  reservation: new ReservationDTO({}),
  room: null
};

const reservationReducer = createReducer(
  initialState,
  on(loadReservation, (state) => {
    console.log('reservationReducer loadReservation state ->', state);
    return { ...state };
  }),
  on(setReservation, (state, props: ReservationStateModel) => {
    console.log('reservationReducer setReservation ->', state, props);
    return { ...state, reservation: props.reservation };
  }),
  on(changeReservation, (state, props: ReservationChangeModel) => {
    console.log('reservationReducer changeReservation ->', state, props);
    return { ...state };
  }),
  on(nextReservation, (state, props: NextReservationModel) => {
    console.log('reservationReducer nextReservation state ->', state, props);
    if (props.room) {
      return { ...state, room: props.room };
    } else {
      return { ...state };
    }
  }),
  on(backReservation, (state) => {
    console.log('reservationReducer backReservation state ->', state);
    return { ...state, room: null };
  })
);

export {
  reservationReducer
};
