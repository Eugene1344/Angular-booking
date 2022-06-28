import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {RoomModel} from "../../../store/models/rooms.models";

@Component({
  selector: 'azds-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input() offers: ReadonlyArray<RoomModel> = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

}
