import { Component, Input } from '@angular/core';
import { Row } from '../row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass']
})
export class RowComponent {
  @Input("row") row!: Row;
  constructor() { 
    
  }
  //row has 36 Ages in it


}
