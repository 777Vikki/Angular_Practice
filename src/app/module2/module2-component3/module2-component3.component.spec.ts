import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2Component3Component } from './module2-component3.component';

describe('Module2Component3Component', () => {
  let component: Module2Component3Component;
  let fixture: ComponentFixture<Module2Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
