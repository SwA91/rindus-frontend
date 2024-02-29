import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppState } from '@app/app.reducer';
import {
  EUserTypeOperation,
  IUserDataOperation,
} from '@app/modules/dashboard/models';
import { UnsubscriptionComponent } from '@app/shared/components';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-management-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './user-management-form.component.html',
  styleUrl: './user-management-form.component.scss',
})
export class UserManagementFormComponent
  extends UnsubscriptionComponent
  implements OnInit
{
  userManagementForm!: FormGroup;
  UserTypeOperation = EUserTypeOperation;
  currentOperation = EUserTypeOperation.ADD;
  @Output() typeRequest = new EventEmitter<IUserDataOperation>();

  constructor(private store: Store<AppState>) {
    super();
    this.userManagementForm = this.resetForm;
  }

  ngOnInit(): void {
    this.store
      .select('user')
      .pipe(takeUntil(this.notifyUnsubscription))
      .subscribe(({ user, operation }) => {
        this.currentOperation = operation;

        if (user) {
          this.userManagementForm.patchValue(user);
          this.userManagementForm.get('email')?.disable();
        } else {
          this.userManagementForm.reset(this.resetForm);
          this.userManagementForm.get('email')?.enable();
        }
      });
  }

  requestAction(typeRequest: EUserTypeOperation) {
    if (
      this.userManagementForm.valid &&
      (typeRequest === EUserTypeOperation.DELETE ||
        this.userManagementForm.touched ||
        this.userManagementForm.dirty)
    ) {
      this.currentOperation = typeRequest;
      this.typeRequest.emit({
        formValue: this.userManagementForm.getRawValue(),
        typeOperation: typeRequest,
      });
    }
  }

  disabledButton(buttonToDisabled: EUserTypeOperation) {
    switch (buttonToDisabled) {
      case EUserTypeOperation.ADD:
        return (
          this.currentOperation !== EUserTypeOperation.ADD ||
          this.userManagementForm.invalid
        );
      case EUserTypeOperation.UPDATE:
      case EUserTypeOperation.DELETE:
        return this.currentOperation !== EUserTypeOperation.UPDATE;
      default:
        return true;
    }
  }

  get resetForm() {
    return new FormGroup({
      id: new FormControl({ value: null, disabled: true }),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(100),
      ]),
    });
  }

  get email() {
    return this.userManagementForm.get('email');
  }

  get name() {
    return this.userManagementForm.get('name');
  }
  get surname() {
    return this.userManagementForm.get('surname');
  }
}
