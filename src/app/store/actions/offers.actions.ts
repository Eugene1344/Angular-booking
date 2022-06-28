import { createAction, props } from '@ngrx/store';
import { RoomModel } from "../models/rooms.models";

export const RECEIVE_OFFERS = createAction(
  '[Offers] Receive Offers',
  props<{ offers: ReadonlyArray<RoomModel> }>()
);
