import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1Component1Component } from './module1-component1.component';

describe('Module1Component1Component', () => {
  let component: Module1Component1Component;
  let fixture: ComponentFixture<Module1Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
