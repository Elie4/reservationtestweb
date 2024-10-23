import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';
import { Branch } from '../../models/branch.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-details-component',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './restaurant-details-component.component.html',
  styleUrl: './restaurant-details-component.component.css',
})
export class RestaurantDetailsComponentComponent {
  restaurant: Restaurant | null = null;
  branches: Branch[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.paramMap.get('id');
    if (restaurantId) {
      this.loadRestaurantDetails(+restaurantId);
      this.loadBranches(+restaurantId);
    }
  }

  loadRestaurantDetails(id: number): void {
    this.restaurantService.getRestaurantById(id).subscribe(
      (data) => {
        this.restaurant = data;
      },
      (error) => {
        console.error('Error fetching restaurant details:', error);
      }
    );
  }

  loadBranches(restaurantId: number): void {
    this.restaurantService.getBranchesByRestaurantId(restaurantId).subscribe(
      (data) => {
        this.branches = data;
      },
      (error) => {
        console.error('Error fetching branches:', error);
      }
    );
  }
}
