import { EUserTypeOperation } from '@app/modules/dashboard/models';
import { UserDataResponse } from '@app/modules/dashboard/models/UserResponse';
import { createReducer, on } from '@ngrx/store';
import * as userAction from './user.action';

export interface UserState {
  user: UserDataResponse | null;
  payload: unknown;
  operation: EUserTypeOperation;
  operationComplete: boolean;
}

export const userInitialState: UserState = {
  user: null,
  payload: null,
  operation: EUserTypeOperation.ADD,
  operationComplete: false,
};

export const userReducer = createReducer(
  userInitialState,

  on(
    userAction.resetUserAction,
    (state): UserState => ({
      ...state,
      user: null,
      payload: null,
      operation: EUserTypeOperation.ADD,
      operationComplete: false,
    })
  ),

  on(
    userAction.deleteUserAction,
    (state): UserState => ({
      ...state,
    })
  ),

  on(
    userAction.deleteUserSuccessAction,
    (state): UserState => ({
      ...state,
      payload: null,
      user: null,
      operation: EUserTypeOperation.ADD,
      operationComplete: true,
    })
  ),

  on(
    userAction.deleteUserErrorAction,
    (state, { payload }): UserState => ({
      ...state,
      payload: { ...(payload as object) },
      user: null,
      operationComplete: false,
    })
  ),

  on(userAction.updateUserAction, (state): UserState => ({ ...state })),

  on(
    userAction.updateUserSuccessAction,
    (state): UserState => ({
      ...state,
      payload: null,
      user: null,
      operation: EUserTypeOperation.ADD,
      operationComplete: true,
    })
  ),

  on(
    userAction.updateUserErrorAction,
    (state, { payload }): UserState => ({
      ...state,
      payload: { ...(payload as object) },
      operationComplete: false,
    })
  ),

  on(userAction.addUserAction, (state): UserState => ({ ...state })),

  on(
    userAction.addUserSuccessAction,
    (state): UserState => ({
      ...state,
      payload: null,
      user: null,
      operation: EUserTypeOperation.ADD,
      operationComplete: true,
    })
  ),

  on(
    userAction.addUserErrorAction,
    (state, { payload }): UserState => ({
      ...state,
      payload: { ...(payload as object) },
      operationComplete: false,
    })
  ),

  on(
    userAction.loadUserAction,
    (state): UserState => ({ ...state, operationComplete: false })
  ),

  on(
    userAction.loadUserSuccessAction,
    (state, { user }): UserState => ({
      ...state,
      payload: null,
      user: { ...user },
      operation: EUserTypeOperation.UPDATE,
    })
  ),

  on(
    userAction.loadUserErrorAction,
    (state, { payload }): UserState => ({
      ...state,
      payload: { ...(payload as object) },
      user: null,
    })
  )
);
