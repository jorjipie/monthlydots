import { Component, OnInit } from '@angular/core';
import { Age } from '../age';
import { Month } from '../month';
@Component({
  selector: 'app-dotgrid',
  templateUrl: './dotgrid.component.html',
  styleUrls: ['./dotgrid.component.sass']
})
export class DotgridComponent implements OnInit {

  constructor() { 
    this.birthDateInput = '';
    this.birthDate = new Date();
    this.person = new Array<Age>();
  }
  log() {
    console.log(this.birthDateInput)
    console.log(typeof this.birthDateInput);
    this.birthDate = new Date(this.birthDateInput);
    console.log(this.birthDate);
    let currentAge = new Age(this.birthDate.getFullYear(), this.birthDate.getMonth(), this.birthDate.getDate());
    while (currentAge.years < 90) {
      currentAge.addMonth();
      let copyObj = Object.assign({}, currentAge);
      //console.log({copyObj, ispast: currentAge.isPast()});
      this.person.push(copyObj);
    }
    console.log(this.person);


  }
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