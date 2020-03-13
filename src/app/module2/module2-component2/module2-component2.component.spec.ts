import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2Component2Component } from './module2-component2.component';

describe('Module2Component2Component', () => {
  let component: Module2Component2Component;
  let fixture: ComponentFixture<Module2Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
