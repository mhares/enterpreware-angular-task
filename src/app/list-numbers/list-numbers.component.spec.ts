import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNumbersComponent } from './list-numbers.component';

describe('ListNumbersComponent', () => {
  let component: ListNumbersComponent;
  let fixture: ComponentFixture<ListNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
