import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AppState } from '@app/app.reducer';
import { UserDataResponse } from '@app/modules/dashboard/models/UserDataResponse';
import { UnsubscriptionComponent } from '@app/shared/components';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-management-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './user-management-table.component.html',
  styleUrl: './user-management-table.component.scss',
})
export class UserManagementTableComponent
  extends UnsubscriptionComponent
  implements AfterViewInit, OnInit, OnDestroy
{
  displayedColumns: string[] = ['id', 'name', 'surname', 'email'];
  dataSource: MatTableDataSource<UserDataResponse>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private store: Store<AppState>) {
    super();
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.store
      .select('users')
      .pipe(takeUntil(this.notifyUnsubscription))
      .subscribe(({ users }) => {
        this.dataSource.data = users;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
