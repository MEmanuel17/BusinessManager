import {Component} from '@angular/core';

export interface EmployersSituation {
  name: string;
  position: number;
  weight: string;
  symbol: number;
}

const ELEMENT_DATA: EmployersSituation[] = [
  {position: 1, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 2, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 3, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 4, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 5, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 6, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 7, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 8, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 9, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 10, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 11, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 12, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 13, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
  {position: 14, name: 'Mogosan Emanuel', weight: 'Angular Programmer', symbol: 10000},
];

/**
 * @title Styling columns using their auto-generated column names
 */
@Component({
  selector: 'reports-table',
  styleUrls: ['reports.table.css'],
  templateUrl: 'reports.table.html',
})
export class ReportsTable {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
}