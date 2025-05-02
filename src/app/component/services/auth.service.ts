import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'https://localhost:7001/api'; // 🔁 Update to match your backend URL

  constructor(private http: HttpClient) {}

  // POST: Login
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Account/login`, data);
  }

  // GET: Get all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/User`);
  }

  // GET: Get user by ID
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/User/${id}`);
  }

  // POST: Apply Leave
  applyLeave(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/LeaveRequest`, data);
  }

  // GET: All leave requests
  getLeaveRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/LeaveRequest`);
  }
}
