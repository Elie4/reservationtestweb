import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';
import { Branch } from '../models/branch.model';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = 'http://your-api-url/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Get all restaurants
  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiUrl}/restaurants`);
  }

  // Get a specific restaurant by ID
  getRestaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.apiUrl}/restaurants/${id}`);
  }

  // Get branches for a specific restaurant
  getBranchesByRestaurantId(restaurantId: number): Observable<Branch[]> {
    return this.http.get<Branch[]>(
      `${this.apiUrl}/restaurants/${restaurantId}/branches`
    );
  }

  // Get a specific branch by ID
  getBranchById(id: number): Observable<Branch> {
    return this.http.get<Branch>(`${this.apiUrl}/branches/${id}`);
  }

  // Get tables for a specific branch
  getTablesByBranchId(branchId: number): Observable<Table[]> {
    return this.http.get<Table[]>(`${this.apiUrl}/branches/${branchId}/tables`);
  }

  // Get available tables for a specific branch on a given date and time
  getAvailableTables(
    branchId: number,
    date: string,
    time: string
  ): Observable<Table[]> {
    const params = new HttpParams().set('date', date).set('time', time);

    return this.http.get<Table[]>(
      `${this.apiUrl}/branches/${branchId}/available-tables`,
      { params }
    );
  }

  // Search restaurants by name or cuisine
  searchRestaurants(query: string): Observable<Restaurant[]> {
    const params = new HttpParams().set('q', query);
    return this.http.get<Restaurant[]>(`${this.apiUrl}/restaurants/search`, {
      params,
    });
  }

  // Get top-rated restaurants
  getTopRatedRestaurants(limit: number = 10): Observable<Restaurant[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<Restaurant[]>(`${this.apiUrl}/restaurants/top-rated`, {
      params,
    });
  }

  // Get restaurants by cuisine
  getRestaurantsByCuisine(cuisine: string): Observable<Restaurant[]> {
    const params = new HttpParams().set('cuisine', cuisine);
    return this.http.get<Restaurant[]>(`${this.apiUrl}/restaurants`, {
      params,
    });
  }
}
