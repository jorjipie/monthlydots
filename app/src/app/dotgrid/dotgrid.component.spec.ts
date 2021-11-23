import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotgridComponent } from './dotgrid.component';

describe('DotgridComponent', () => {
  let component: DotgridComponent;
  let fixture: ComponentFixture<DotgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
