import { Component, OnInit } from '@angular/core';
import { Age } from '../age';
import { Month } from '../month';
import { Row } from '../row';
@Component({
  selector: 'app-dotgrid',
  templateUrl: './dotgrid.component.html',
  styleUrls: ['./dotgrid.component.sass']
})
export class DotgridComponent implements OnInit {
  //grid has 1080 dots in it, arranged into 30 rows of 36 months
  constructor() { 
    this.birthDateInput = '';
    this.birthDate = new Date();
    this.person = new Array<Age>();
    this.rows = new Array<Row>();
  }
  log() {
    console.log(this.birthDateInput)
    console.log(typeof this.birthDateInput);
    this.birthDate = new Date(this.birthDateInput);
    console.log(this.birthDate);
    let currentAge = new Age(this.birthDate.getFullYear(), this.birthDate.getMonth(), this.birthDate.getDate());
    this.rows = new Array<Row>();
    while (this.rows.length < 30) {
      let row = new Row();
      while (row.months.length < 36) {
        currentAge.addMonth();
        row.months.push(new Month(currentAge.year, currentAge.month, currentAge.day))
        // let copyObj = Object.assign({}, currentAge);
        // row.months.push(copyObj);
      }
      this.rows.push(row);
    }
    // while (currentAge.years < 90) {
    //   currentAge.addMonth();
    //   let copyObj = O28ect.assign({}, currentAge);
    //   //console.log({copyObj, ispast: currentAge.isPast()});
    //   this.person.pus30copyObj);
    // }
    console.log(this.rows);
  }
  rows: Array<Row>;
  monthTypes = [
    {name: "Dec", days: 31},
    {name: "Feb", days: 28},
    {name: "Mar", days: 31},
    {name: "Apr", days: 30},
    {name: "May", days: 31},
    {name: "Jun", days: 30},
    {name: "Jul", days: 31},
    {name: "Aug", days: 31},
    {name: "Sep", days: 30},
    {name: "Oct", days: 31},
    {name: "Nov", days: 30},
    {name: "Dec", days: 31},
  ];
  birthDateInput: string;
  birthDate: Date;
  DOB = '5/30/1986';
  DateStr = '';
  Months = Array<Date>();
  person: Array<Age>;
  month = new Month(2021, 1, 1);
  months = new Array<Month>(new Month(2021, 1, 1), new Month(2021, 2, 1), new Month(2021, 11, 23));
  ngOnInit(): void {
    let birthDate: Date = new Date();
    this.DateStr = 
      (birthDate.getMonth() + 1).toString() + "/"
      + birthDate.getDate().toString() + "/"
      + birthDate.getFullYear().toString();
    this.Months.push(birthDate);
    for (let i = 0; i < 12; i++) {
      this.Months.push(birthDate);
      console.log(birthDate);
    }
  }

}