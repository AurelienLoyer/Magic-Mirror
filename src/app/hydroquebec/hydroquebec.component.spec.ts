import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydroquebecComponent } from './hydroquebec.component';

describe('HydroquebecComponent', () => {
  let component: HydroquebecComponent;
  let fixture: ComponentFixture<HydroquebecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydroquebecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydroquebecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
