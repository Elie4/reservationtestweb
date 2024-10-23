import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-restaurant-list-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './restaurant-list-component.component.html',
  styleUrl: './restaurant-list-component.component.css',
})
export class RestaurantListComponentComponent {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(
      (data) => {
        this.restaurants = data;
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }
}
