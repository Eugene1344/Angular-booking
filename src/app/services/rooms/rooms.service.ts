import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoomModel } from '../../store/models/rooms.models';

@Injectable({ providedIn: 'root' })
export class RoomsService {
  constructor(private http: HttpClient) {}

  getRooms(): Observable<ReadonlyArray<RoomModel>> {
    return this.http.get<{ items: RoomModel[] }>('http://localhost:3030/rooms')
      .pipe(map((offers) => offers.items || []))
  }
}
