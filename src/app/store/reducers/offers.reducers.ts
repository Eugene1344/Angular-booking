import { Action, createReducer, on } from '@ngrx/store';
import { RECEIVE_OFFERS } from '../actions/offers.actions';
import { RoomModel } from "../models/rooms.models";

export const initialState: ReadonlyArray<RoomModel> = [];

export const offersReducer = createReducer(
  initialState,
  on(RECEIVE_OFFERS, (state , { offers } ) => offers)
);
