import { UserDataResponse } from '@app/modules/dashboard/models/UserDataResponse';
import { createAction, props } from '@ngrx/store';

export enum UsersActionType {
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccess = '[Users] Load Users Success',
  LoadUsersError = '[Users] Load Users Error',
}

export const loadUsersAction = createAction(UsersActionType.LoadUsers);

export const loadUsersSuccessAction = createAction(
  UsersActionType.LoadUsersSuccess,
  props<{ users: UserDataResponse[] }>()
);

export const loadUsersErrorAction = createAction(
  UsersActionType.LoadUsersError,
  props<{ payload: any }>()
);
