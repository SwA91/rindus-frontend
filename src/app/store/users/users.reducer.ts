import { createReducer, on } from '@ngrx/store';
import * as Actions from './users.action';

export interface UsersState {
  users: any[];
  payload: any;
}

export const usersInitialState: UsersState = {
  users: [],
  payload: null,
};

export const usersReducer = createReducer(
  usersInitialState,

  on(Actions.loadUsersAction, (state): UsersState => ({ ...state })),

  on(
    Actions.loadUsersSuccessAction,
    (state, { users }): UsersState => ({
      ...state,
      payload: null,
      users: [...users],
    })
  ),

  on(
    Actions.loadUsersErrorAction,
    (state, { payload }): UsersState => ({
      ...state,
      payload: { ...payload },
      users: [],
    })
  )
);
