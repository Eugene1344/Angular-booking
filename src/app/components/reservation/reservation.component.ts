import {Component, OnInit, OnDestroy} from '@angular/core';
import { Store } from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {ReservationStateModel} from "../../store/models/reservation-state.models";
import { selectReservation } from "../../store/selectors/reservation.selector";
import { selectOffer } from "../../store/selectors/offers.selector";
import { loadReservation } from "../../store/actions/reservation.actions";
import { ReservationSteps } from "../../services/reservation/reservation.enums";
import {ReservationDTO} from "../../store/dto/reservation.dto";
import { RoomModel } from "../../store/models/rooms.models";
import {RoomsService} from "../../services/rooms/rooms.service";
import {RECEIVE_OFFERS} from "../../store/actions/offers.actions";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {

  reservationSteps = ReservationSteps;
  reservation$: Observable<ReservationDTO>;
  subscriptionReservation$!: Subscription;
  reservation!: ReservationDTO;

  offers$: Observable<ReadonlyArray<RoomModel>>;


  constructor(
    private store: Store,
    private offerService: RoomsService
  ) {
    this.reservation$ = this.store.select(selectReservation)
    this.offers$ = this.store.select(selectOffer);
  }

  ngOnInit(): void {
    this.store.dispatch(loadReservation());
    this.subscriptionReservation$ = this.reservation$.subscribe( (state) => {
      this.reservation = state;
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptionReservation$) {
      this.subscriptionReservation$.unsubscribe();
    }
  }

}
