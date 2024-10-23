import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';
import { Branch } from '../../models/branch.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branch-selection-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branch-selection-component.component.html',
  styleUrl: './branch-selection-component.component.css',
})
export class BranchSelectionComponentComponent {
  restaurant: Restaurant | null = null;
  branches: Branch[] = [];
  selectedBranchId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  onBranchSelect(branchId: number): void {
    this.selectedBranchId = branchId;
  }

  onContinue(): void {
    if (this.selectedBranchId) {
      this.router.navigate(['/reservation', this.selectedBranchId]);
    }
  }
}
