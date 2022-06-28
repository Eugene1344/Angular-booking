import { createAction, props } from '@ngrx/store';
import {NextReservationModel, ReservationChangeModel} from '../models/reservation.models';
import {ReservationStateModel } from '../models/reservation-state.models';
import {ReservationSteps} from "../../services/reservation/reservation.enums";

const LOAD_RESERVATION: string = '[RESERVATION] Load';
const SET_RESERVATION: string = '[RESERVATION] Set';
const CHANGE_RESERVATION: string = '[RESERVATION] change';
const NEXT_RESERVATION: string = '[RESERVATION] Next Reservation';
const BACK_RESERVATION: string = '[RESERVATION] Back Reservation';

const loadReservation = createAction(LOAD_RESERVATION);
const setReservation = createAction(SET_RESERVATION, props<ReservationStateModel>());
const changeReservation = createAction(CHANGE_RESERVATION, props<ReservationChangeModel>());
const nextReservation = createAction(NEXT_RESERVATION, props<NextReservationModel>());
const backReservation = createAction(BACK_RESERVATION);

export {
  loadReservation,
  setReservation,
  changeReservation,
  nextReservation,
  backReservation,
  LOAD_RESERVATION,
  SET_RESERVATION,
  CHANGE_RESERVATION,
  NEXT_RESERVATION,
  BACK_RESERVATION,
};
