import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Month } from '../month';

@Component({
  selector: 'app-dotgrid',
  templateUrl: './dotgrid.component.html',
  styleUrls: ['./dotgrid.component.sass']
})
export class DotgridComponent implements OnInit {

  constructor() { 

  }
  DOB = '5/30/1986';
  DateStr = '';
  Months = Array<Date>();
  month = new Month(2021, 1, 1);
  months = new Array<Month>(new Month(2021, 1, 1), new Month(2021, 2, 1), new Month(2021, 11, 23));

  ngOnInit(): void {
    let birthDate: Date = new Date(this.DOB);
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