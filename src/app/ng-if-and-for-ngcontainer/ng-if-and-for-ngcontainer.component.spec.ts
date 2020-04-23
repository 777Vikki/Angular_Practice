import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfAndForNgcontainerComponent } from './ng-if-and-for-ngcontainer.component';

describe('NgIfAndForNgcontainerComponent', () => {
  let component: NgIfAndForNgcontainerComponent;
  let fixture: ComponentFixture<NgIfAndForNgcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfAndForNgcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfAndForNgcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
