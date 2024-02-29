import { inject } from '@angular/core';
import { UserManagementService } from '@app/modules/dashboard/services/user-management/user-management.service';
import * as userStore from '@app/store/user';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

export const updateUserEffect$ = createEffect(
  (
    actions$ = inject(Actions),
    usersService = inject(UserManagementService)
  ) => {
    return actions$.pipe(
      ofType(userStore.updateUserAction),
      exhaustMap(param =>
        usersService.updateUser(param.user).pipe(
          map(user => userStore.updateUserSuccessAction({ user })),
          catchError(error =>
            of(userStore.updateUserErrorAction({ payload: error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const addUserEffect$ = createEffect(
  (
    actions$ = inject(Actions),
    usersService = inject(UserManagementService)
  ) => {
    return actions$.pipe(
      ofType(userStore.addUserAction),
      exhaustMap(param =>
        usersService.addUser(param.user).pipe(
          map(user => userStore.addUserSuccessAction({ user })),
          catchError(error =>
            of(userStore.addUserErrorAction({ payload: error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const deleteUserEffect$ = createEffect(
  (
    actions$ = inject(Actions),
    usersService = inject(UserManagementService)
  ) => {
    return actions$.pipe(
      ofType(userStore.deleteUserAction),
      exhaustMap(param =>
        usersService.deleteUser(param.id).pipe(
          map(() => userStore.deleteUserSuccessAction()),
          catchError(error =>
            of(userStore.deleteUserErrorAction({ payload: error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const loadUserEffect$ = createEffect(
  (
    actions$ = inject(Actions),
    usersService = inject(UserManagementService)
  ) => {
    return actions$.pipe(
      ofType(userStore.loadUserAction),
      exhaustMap(param =>
        usersService.getUser(param.id).pipe(
          map(user => userStore.loadUserSuccessAction({ user })),
          catchError(error =>
            of(userStore.loadUserErrorAction({ payload: error }))
          )
        )
      )
    );
  },
  { functional: true }
);
