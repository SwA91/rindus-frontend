import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/app.reducer';
import {
  UserManagementFormComponent,
  UserManagementTableComponent,
} from '@app/modules/dashboard/components/user-management';
import { UnsubscriptionComponent } from '@app/shared/components';
import { NotificationService } from '@app/shared/services';
import { loadUsersAction } from '@app/store/users';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserManagementTableComponent, UserManagementFormComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent
  extends UnsubscriptionComponent
  implements OnInit
{
  constructor(
    private store: Store<AppState>,
    private notification: NotificationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.controlErrorUsers();
    this.store.dispatch(loadUsersAction());
  }

  private controlErrorUsers() {
    this.store
      .select('users')
      .pipe(takeUntil(this.notifyUnsubscription))
      .subscribe(({ payload }) => {
        if (payload) {
          this.notification.error('Has ocurred an error, pleas try again');
        }
      });
  }
}
