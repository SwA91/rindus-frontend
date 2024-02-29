import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { selectUsers } from '@app/app.selectors';
import { UserDataResponse } from '@app/modules/dashboard/models/UserResponse';
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
  clickedRow: UserDataResponse | null = null;
  usersState$ = this.store.select(selectUsers);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() selectedRow = new EventEmitter<UserDataResponse>();

  constructor(private store: Store) {
    super();
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.usersState$
      .pipe(takeUntil(this.notifyUnsubscription))
      .subscribe(({ users }) => {
        this.dataSource.data = users;
        this.clickedRow = null;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sendSelectedRow(row: UserDataResponse) {
    if (row.id === this.clickedRow?.id) {
      this.selectedRow.emit();
      this.clickedRow = null;
    } else {
      this.selectedRow.emit(row);
      this.clickedRow = row;
    }
  }
}
