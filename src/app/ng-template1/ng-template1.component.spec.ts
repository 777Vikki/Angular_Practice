import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplate1Component } from './ng-template1.component';

describe('NgTemplate1Component', () => {
  let component: NgTemplate1Component;
  let fixture: ComponentFixture<NgTemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
