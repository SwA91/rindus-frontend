import { ActionReducerMap } from '@ngrx/store';
import * as users from './store/users';

export interface AppState {
  users: users.UsersState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: users.usersReducer,
};
