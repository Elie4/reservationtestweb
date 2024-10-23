import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { ReservationService } from '../../services/reservation.service';

import { Table } from '../../models/table.model';
import { Reservation } from '../../models/reservation.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-table-reservation-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [RestaurantService, ReservationService],
  templateUrl: './table-reservation-component.component.html',
  styleUrl: './table-reservation-component.component.css',
})
export class TableReservationComponentComponent {
  branchId: number | null = null;
  tables: Table[] = [];
  reservationForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private reservationService: ReservationService
  ) {
    this.reservationForm = this.formBuilder.group({
      tableId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    const branchIdParam = this.route.snapshot.paramMap.get('branchId');
    if (branchIdParam) {
      this.branchId = +branchIdParam;
      this.loadTables(this.branchId);
    }
  }

  loadTables(branchId: number): void {
    this.restaurantService.getTablesByBranchId(branchId).subscribe(
      (data) => {
        this.tables = data;
      },
      (error) => {
        console.error('Error fetching tables:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.reservationForm.valid && this.branchId) {
      const reservation: Reservation = {
        ...this.reservationForm.value,
        branchId: this.branchId,
        restaurantId: 0, // You might want to pass this from the previous component
      };

      this.reservationService.createReservation(reservation).subscribe(
        (response) => {
          console.log('Reservation created successfully:', response);
          // Handle success (e.g., show a success message, navigate to a confirmation page)
        },
        (error) => {
          console.error('Error creating reservation:', error);
          // Handle error (e.g., show an error message)
        }
      );
    }
  }
}
