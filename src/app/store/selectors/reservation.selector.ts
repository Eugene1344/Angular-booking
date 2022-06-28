import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ReservationStateModel } from '../models/reservation-state.models';

const selectReservationState = createFeatureSelector<ReservationStateModel>('reservation');
const selectReservation = createSelector(selectReservationState, (state: ReservationStateModel) => state.reservation);

export {
  selectReservationState,
  selectReservation
};
