import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { UserManagementFormComponent } from './user-management-form.component';

describe('UserManagementFormComponent', () => {
  let component: UserManagementFormComponent;
  let fixture: ComponentFixture<UserManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagementFormComponent, NoopAnimationsModule],
      providers: [provideMockStore({})],
    }).compileComponents();
    fixture = TestBed.createComponent(UserManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
