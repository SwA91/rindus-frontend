import { inject } from '@angular/core';
import { UserManagementService } from '@app/modules/dashboard/services/user-management/user-management.service';
import * as UsersStore from '@app/store/users';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

export const loadUsersEffect$ = createEffect(
  (
    actions$ = inject(Actions),
    usersService = inject(UserManagementService)
  ) => {
    return actions$.pipe(
      ofType(UsersStore.loadUsersAction),
      exhaustMap(() =>
        usersService.getUsers().pipe(
          map(users => UsersStore.loadUsersSuccessAction({ users })),
          catchError(error =>
            of(UsersStore.loadUsersErrorAction({ payload: error }))
          )
        )
      )
    );
  },
  { functional: true }
);
