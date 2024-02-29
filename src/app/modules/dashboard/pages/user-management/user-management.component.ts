import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/app.reducer';
import {
  UserManagementFormComponent,
  UserManagementTableComponent,
} from '@app/modules/dashboard/components/user-management';
import { UnsubscriptionComponent } from '@app/shared/components';
import { NotificationService } from '@app/shared/services';
import {
  addUserAction,
  deleteUserAction,
  loadUserAction,
} from '@app/store/user';
import { loadUsersAction } from '@app/store/users';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import {
  resetUserAction,
  updateUserAction,
} from '../../../../store/user/user.action';
import { IUserDataOperation } from '../../models';
import { EUserTypeOperation } from '../../models/UserDto';
import { UserDataResponse } from '../../models/UserResponse';

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
    this.controlStoreUsers();
    this.store.dispatch(loadUsersAction());
    this.controlStoreUser();
  }

  processRow(row: UserDataResponse) {
    if (row) {
      this.store.dispatch(loadUserAction({ id: row.id }));
    } else {
      this.store.dispatch(resetUserAction());
    }
  }

  processRequest(data: IUserDataOperation) {
    switch (data.typeOperation) {
      case EUserTypeOperation.DELETE:
        this.store.dispatch(deleteUserAction({ id: data.formValue.id }));
        break;

      case EUserTypeOperation.ADD:
        this.store.dispatch(addUserAction({ user: data.formValue }));
        break;

      case EUserTypeOperation.UPDATE:
        this.store.dispatch(updateUserAction({ user: data.formValue }));
        break;

      default:
        break;
    }
  }

  private controlStoreUser() {
    this.store
      .select('user')
      .pipe(takeUntil(this.notifyUnsubscription))
      .subscribe(({ payload, operationComplete }) => {
        if (payload) this.notifyError();

        if (operationComplete) this.store.dispatch(loadUsersAction());
      });
  }

  private controlStoreUsers() {
    this.store
      .select('users')
      .pipe(takeUntil(this.notifyUnsubscription))
      .subscribe(({ payload }) => {
        if (payload) {
          this.notifyError();
        }
      });
  }

  private notifyError() {
    this.notification.error('Has ocurred an error, pleas try again');
  }
}
