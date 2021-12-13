import { Component, OnInit } from '@angular/core';
import { EEquipments } from './equipment';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {
  pageTitle: string = 'Internal equipment';
  
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredEquipments = this.performFilter(value);
  }

  filteredEquipments: EEquipments[] = [];
  equipments: EEquipments[] = [
    {
      'equipmentsID': 1,
      'equipmentsName': 'Laptop',
      'dateOfDelivery': 'March 18, 2021',
      'YearofBuyed': 'January 10, 2019',
      'productCode': 'LPHPZINT20',
      'condition': 'good'
    },
    {
      "equipmentsID": 2,
      "equipmentsName": "Mouse",
      "dateOfDelivery": "March 19, 2021",
      "YearofBuyed": "May 21, 2019",
      "productCode": "DSAKJ2",
      "condition": "good"
    },
    {
      "equipmentsID": 3,
      "equipmentsName": "Keyboard",
      "dateOfDelivery": "March 30, 2021",
      "YearofBuyed": "May 9, 2019",
      "productCode": "DDS232",
      "condition": "good"
    }
  ];

  performFilter(filterBy: string): EEquipments[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.equipments.filter((product: EEquipments) =>
      product.equipmentsName.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
  }

}
 