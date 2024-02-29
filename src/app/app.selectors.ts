import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as user from './store/user';
import * as users from './store/users';

export const selectUser = createSelector(
  createFeatureSelector<user.UserState>('user'),
  state => state
);

export const selectUsers = createSelector(
  createFeatureSelector<users.UsersState>('users'),
  state => state
);
