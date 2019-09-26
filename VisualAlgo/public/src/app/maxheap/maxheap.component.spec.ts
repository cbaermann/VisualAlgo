import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxheapComponent } from './maxheap.component';

describe('MaxheapComponent', () => {
  let component: MaxheapComponent;
  let fixture: ComponentFixture<MaxheapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxheapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxheapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
