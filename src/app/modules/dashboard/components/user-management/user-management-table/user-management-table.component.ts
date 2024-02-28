import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  surname: string;
  email: string;
}

/** Constants used to fill up our data base. */
const EMAIL: string[] = [
  'blueberry@gmail.com',
  'lychee@gmail.com',
  'kiwi@gmail.com',
  'mango@gmail.com',
  'peach@gmail.com',
  'lime@gmail.com',
  'pomegranate@gmail.com',
  'pineapple@gmail.com',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
@Component({
  selector: 'app-user-management-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './user-management-table.component.html',
  styleUrl: './user-management-table.component.scss',
})
export class UserManagementTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'email'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) =>
      this.createNewUser(k + 1)
    );

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';

    return {
      id: id.toString(),
      name: name,
      surname: Math.round(Math.random() * 100)
        .toString()
        .concat(name),
      email: EMAIL[Math.round(Math.random() * (EMAIL.length - 1))],
    };
  }
}
