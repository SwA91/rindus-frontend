import { Component } from '@angular/core';
import { UserManagementFormComponent } from '@app/modules/dashboard/components/user-management/user-management-form/user-management-form.component';
import { UserManagementTableComponent } from '@app/modules/dashboard/components/user-management/user-management-table/user-management-table.component';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserManagementTableComponent, UserManagementFormComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {}
