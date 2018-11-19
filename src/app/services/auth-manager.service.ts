import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {

  private authUrl = 'http://localhost:3000';

  currentUser: User;

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.authUrl}/users`, httpOptions);
  }

  addUser(newUser): Observable<any> {
    return this.http.post(`${this.authUrl}/users`, newUser, httpOptions);
  }

  deleteUser(userId: any): Observable<any> {
    return this.http.delete(`${this.authUrl}/users/${userId}`, httpOptions);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.authUrl}/users/${user.id}`, user, httpOptions);
  }
}
