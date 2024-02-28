import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { delay } from 'rxjs';
import { UserDataResponse } from '../../models/UserDataResponse';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<UserDataResponse[]>(`${environment.apiUrl}/user`)
      .pipe(delay(1500));
  }
}
