import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component1Component } from './module1-component1/module1-component1.component';
import { Module1Component2Component } from './module1-component2/module1-component2.component';


@NgModule({
  declarations: [Module1Component1Component, Module1Component2Component],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
