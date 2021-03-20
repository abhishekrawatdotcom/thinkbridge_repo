import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateleproductComponent } from './dateleproduct.component';

describe('DateleproductComponent', () => {
  let component: DateleproductComponent;
  let fixture: ComponentFixture<DateleproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateleproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateleproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
