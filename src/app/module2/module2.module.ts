import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component1Component } from './module2-component1/module2-component1.component';
import { Module2Component2Component } from './module2-component2/module2-component2.component';
import { Module2Component3Component } from './module2-component3/module2-component3.component';


@NgModule({
  declarations: [Module2Component1Component, Module2Component2Component, Module2Component3Component],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
