import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArraySetValueComponent } from './form-array-set-value.component';

describe('FormArraySetValueComponent', () => {
  let component: FormArraySetValueComponent;
  let fixture: ComponentFixture<FormArraySetValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArraySetValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArraySetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
