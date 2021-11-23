import { Component, Input } from '@angular/core';
import { Month } from '../month';

@Component({
  selector: 'app-monthdot',
  templateUrl: './monthdot.component.html',
  styleUrls: ['./monthdot.component.sass']
})
export class MonthdotComponent  {
  @Input("month") month!: Month;
}
