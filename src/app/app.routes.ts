import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/layout/layout.module').then(m => m.LayoutModule),
      },
    ],
  },
  { path: '**', redirectTo: 'error/404', pathMatch: 'full' },
];
