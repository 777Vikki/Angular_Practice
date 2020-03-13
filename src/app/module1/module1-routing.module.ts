import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module1Component1Component } from './module1-component1/module1-component1.component';
import { Module1Component2Component } from './module1-component2/module1-component2.component';


const routes: Routes = [
  {
    path: 'module1-component1',
    redirectTo: ''
  },
  {
    path: '',
    component: Module1Component1Component
  },
  {
    path: 'module1-component2',
    component: Module1Component2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { 
  constructor() {
    console.log("#Module1RoutingModule");
  }
}
