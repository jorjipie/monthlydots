import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthdotComponent } from './monthdot.component';

describe('MonthdotComponent', () => {
  let component: MonthdotComponent;
  let fixture: ComponentFixture<MonthdotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthdotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthdotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
