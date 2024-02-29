import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { UserAddRequest, UserUpdateRequest } from '../../models';
import {
  UserAddResponse,
  UserDataResponse,
  UserUpdateResponse,
} from '../../models/UserResponse';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<UserDataResponse[]>(`${environment.apiUrl}/user`);
  }

  getUser(id: number) {
    return this.http.get<UserDataResponse>(`${environment.apiUrl}/user/${id}`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.apiUrl}/user/${id}`);
  }

  addUser(user: UserAddRequest) {
    return this.http.post<UserAddResponse>(
      `${environment.apiUrl}/user/add`,
      user
    );
  }

  updateUser(user: UserUpdateRequest) {
    return this.http.put<UserUpdateResponse>(
      `${environment.apiUrl}/user/update`,
      user
    );
  }
}
