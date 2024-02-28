import { Component } from '@angular/core';
import {
  UserManagementFormComponent,
  UserManagementTableComponent,
} from '@app/modules/dashboard/components/user-management';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserManagementTableComponent, UserManagementFormComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {}
