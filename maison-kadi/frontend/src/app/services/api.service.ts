import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get(`${this.baseUrl}/menu`);
  }

  getOrders(userId: number) {
    return this.http.get(`${this.baseUrl}/orders/${userId}`);
  }
}
