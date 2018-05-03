import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Place } from './Place';
import { PLACES } from './mock-places';
import { MessageService } from './message.service';

@Injectable()
export class PlaceService {

  constructor(private messageService: MessageService) { }

  /** GET heroes from the server */
  getPlaces(): Observable<Place[]> {
    this.messageService.add('PlaceService: fetched places');
    return of(PLACES);
  }

  /** get place by ID */
  getPlace(id: number): Observable<Place> {
    this.messageService.add(`PlaceService: fetched place id=${id}`);
    return of(PLACES.find(place => place.id === id));
  }
}
