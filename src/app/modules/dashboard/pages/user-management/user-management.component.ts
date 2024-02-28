import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/app.reducer';
import {
  UserManagementFormComponent,
  UserManagementTableComponent,
} from '@app/modules/dashboard/components/user-management';
import { loadUsersAction } from '@app/store/users';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserManagementTableComponent, UserManagementFormComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsersAction());
  }
}
