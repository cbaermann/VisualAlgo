import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BogoComponent } from './bogo.component';

describe('BogoComponent', () => {
  let component: BogoComponent;
  let fixture: ComponentFixture<BogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
