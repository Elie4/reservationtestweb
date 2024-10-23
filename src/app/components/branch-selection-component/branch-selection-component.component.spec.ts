import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSelectionComponentComponent } from './branch-selection-component.component';

describe('BranchSelectionComponentComponent', () => {
  let component: BranchSelectionComponentComponent;
  let fixture: ComponentFixture<BranchSelectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchSelectionComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchSelectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
