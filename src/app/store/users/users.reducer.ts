import { UserDataResponse } from '@app/modules/dashboard/models/UserResponse';
import { createReducer, on } from '@ngrx/store';
import * as usersAction from './users.action';

export interface UsersState {
  users: UserDataResponse[];
  payload: unknown;
}

export const usersInitialState: UsersState = {
  users: [],
  payload: null,
};

export const usersReducer = createReducer(
  usersInitialState,

  on(usersAction.loadUsersAction, (state): UsersState => ({ ...state })),

  on(
    usersAction.loadUsersSuccessAction,
    (state, { users }): UsersState => ({
      ...state,
      payload: null,
      users: [...users],
    })
  ),

  on(
    usersAction.loadUsersErrorAction,
    (state, { payload }): UsersState => ({
      ...state,
      payload: { ...(payload as object) },
      users: [],
    })
  )
);
