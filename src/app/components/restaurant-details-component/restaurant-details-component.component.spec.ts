import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsComponentComponent } from './restaurant-details-component.component';

describe('RestaurantDetailsComponentComponent', () => {
  let component: RestaurantDetailsComponentComponent;
  let fixture: ComponentFixture<RestaurantDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDetailsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
