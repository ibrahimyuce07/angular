import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("İbrahim", "Yüce", "ibrahim.yuce@luv2code.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@luv2code.com", 40000),
    new SalesPerson("Martin", "Freeman", "mfreeman@luv2code.com", 90000),
    new SalesPerson("Mai", "Troung", "mai@luv2code.com", 60000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
