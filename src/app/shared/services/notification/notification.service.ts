import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '@app/shared/components';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  error(message: string) {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: {
        message,
      },
    });
  }

  success(message: string) {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: {
        message,
      },
    });
  }
}
