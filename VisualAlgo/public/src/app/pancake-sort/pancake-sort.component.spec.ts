import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakeSortComponent } from './pancake-sort.component';

describe('PancakeSortComponent', () => {
  let component: PancakeSortComponent;
  let fixture: ComponentFixture<PancakeSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PancakeSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PancakeSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
