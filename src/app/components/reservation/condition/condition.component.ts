import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ReservationStateModel} from "../../../store/models/reservation-state.models";
import {Store} from "@ngrx/store";
import {selectReservation} from "../../../store/selectors/reservation.selector";
import {changeReservation, loadReservation} from "../../../store/actions/reservation.actions";
import {ReservationSteps} from "../../../services/reservation/reservation.enums";
import {ReservationDTO} from "../../../store/dto/reservation.dto";

@Component({
  selector: 'azds-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit, OnDestroy {

  adults: number[] = [1, 2, 3, 4, 5, 6];
  children: number[] = [1, 2, 3, 4, 5, 6];

  reservation$: Observable<ReservationDTO>;
  subscriptionReservation$!: Subscription;
  reservation!: ReservationDTO;

  constructor(private store: Store) {
    this.reservation$ = this.store.select(selectReservation);
  }

  public onAdults(e: Event): void {
    const el: any = e.target;
    this.store.dispatch(changeReservation({name: 'adults', value: el.value}));
  }

  public onChildren(e: Event): void {
    const el: any = e.target;
    this.store.dispatch(changeReservation({name: 'children', value: el.value}));
  }

  public onArrive(e: Event): void {
    const el: any = e.target;
    this.store.dispatch(changeReservation({name: 'arrive', value: el.value }));
  }

  public onDepart(e: Event): void {
    const el: any = e.target;
    this.store.dispatch(changeReservation({ name: 'depart', value: el.value }));
  }

  public onSubmit(): void {
    console.log('Submit')
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
