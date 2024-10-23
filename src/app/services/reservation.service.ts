import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  createReservation(reservation: Reservation): Observable<any> {
    // Implement the API call to create a reservation
    return this.http.post<any>('/api/reservations', reservation);
  }
}
