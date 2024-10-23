import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReservationComponentComponent } from './table-reservation-component.component';

describe('TableReservationComponentComponent', () => {
  let component: TableReservationComponentComponent;
  let fixture: ComponentFixture<TableReservationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableReservationComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableReservationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
