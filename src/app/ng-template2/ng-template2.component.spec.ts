import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplate2Component } from './ng-template2.component';

describe('NgTemplate2Component', () => {
  let component: NgTemplate2Component;
  let fixture: ComponentFixture<NgTemplate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
