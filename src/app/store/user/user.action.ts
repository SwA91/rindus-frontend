import {
  UserAddRequest,
  UserAddResponse,
  UserDataResponse,
  UserUpdateRequest,
  UserUpdateResponse,
} from '@app/modules/dashboard/models';
import { createAction, props } from '@ngrx/store';

export enum UserActionType {
  ResetUser = '[User] Reset User',

  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User] Load User Success',
  LoadUserError = '[User] Load User Error',

  DeleteUser = '[User] Delete User',
  DeleteUserSuccess = '[User] Delete User Success',
  DeleteUserError = '[User] Delete User Error',

  AddUser = '[User] Add User',
  AddUserSuccess = '[User] Add User Success',
  AddUserError = '[User] Add User Error',

  UpdateUser = '[User] Update User',
  UpdateUserSuccess = '[User] Update User Success',
  UpdateUserError = '[User] Update User Error',
}

export const resetUserAction = createAction(UserActionType.ResetUser);

export const updateUserAction = createAction(
  UserActionType.UpdateUser,
  props<{ user: UserUpdateRequest }>()
);

export const updateUserSuccessAction = createAction(
  UserActionType.UpdateUserSuccess,
  props<{ user: UserUpdateResponse }>()
);

export const updateUserErrorAction = createAction(
  UserActionType.UpdateUserError,
  props<{ payload: unknown }>()
);

export const addUserAction = createAction(
  UserActionType.AddUser,
  props<{ user: UserAddRequest }>()
);

export const addUserSuccessAction = createAction(
  UserActionType.AddUserSuccess,
  props<{ user: UserAddResponse }>()
);

export const addUserErrorAction = createAction(
  UserActionType.AddUserError,
  props<{ payload: unknown }>()
);

export const loadUserAction = createAction(
  UserActionType.LoadUser,
  props<{ id: number }>()
);

export const loadUserSuccessAction = createAction(
  UserActionType.LoadUserSuccess,
  props<{ user: UserDataResponse }>()
);

export const loadUserErrorAction = createAction(
  UserActionType.LoadUserError,
  props<{ payload: unknown }>()
);

export const deleteUserAction = createAction(
  UserActionType.DeleteUser,
  props<{ id: number }>()
);

export const deleteUserSuccessAction = createAction(
  UserActionType.DeleteUserSuccess
);

export const deleteUserErrorAction = createAction(
  UserActionType.DeleteUserError,
  props<{ payload: unknown }>()
);
