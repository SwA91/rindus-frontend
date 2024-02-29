import { ActionReducerMap } from '@ngrx/store';
import * as user from './store/user';
import * as users from './store/users';

export interface AppState {
  users: users.UsersState;
  user: user.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: users.usersReducer,
  user: user.userReducer,
};
