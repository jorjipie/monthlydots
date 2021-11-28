import { Component, Input } from '@angular/core';
// import { Month } from '../month';
import { Age } from '../age';

@Component({
  selector: 'app-monthdot',
  templateUrl: './monthdot.component.html',
  styleUrls: ['./monthdot.component.sass']
})
export class MonthdotComponent  {
  @Input("month") month!: Age;
}
