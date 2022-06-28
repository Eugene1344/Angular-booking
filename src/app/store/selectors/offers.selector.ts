import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RoomModel } from '../models/rooms.models';

const selectOfferState = createFeatureSelector<ReadonlyArray<RoomModel>>('offers');
const selectOffer = createSelector(selectOfferState, (offers) => offers);

export {
  selectOfferState,
  selectOffer
};
