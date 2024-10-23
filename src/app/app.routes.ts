import { Routes } from '@angular/router';
import { RestaurantListComponentComponent } from './components/restaurant-list-component/restaurant-list-component.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponentComponent },
  { path: '', component: HomeComponent },
  // ... other routes
];