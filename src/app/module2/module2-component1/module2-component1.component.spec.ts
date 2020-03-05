import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2Component1Component } from './module2-component1.component';

describe('Module2Component1Component', () => {
  let component: Module2Component1Component;
  let fixture: ComponentFixture<Module2Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
