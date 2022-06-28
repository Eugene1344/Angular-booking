import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Offer } from '../../store/models/offers.models';

@Injectable({ providedIn: 'root' })
export class OffersService {
  constructor(private http: HttpClient) {}

  getOffers(): Observable<ReadonlyArray<Offer>> {
    return this.http.get<{ items: Offer[] }>('http://localhost:3030/rooms')
      .pipe(map((offers) => offers.items || []))
  }
}
