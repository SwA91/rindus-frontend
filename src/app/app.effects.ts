import { FunctionalEffect } from '@ngrx/effects';
import * as UserEffects from './store/user/user.effect';
import * as UsersEffects from './store/users/users.effects';

export const appEffects: Record<string, FunctionalEffect>[] = [
  UsersEffects as Record<string, FunctionalEffect>,
  UserEffects as Record<string, FunctionalEffect>,
];
