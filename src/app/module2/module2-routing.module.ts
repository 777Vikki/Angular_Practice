import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module2Component1Component } from './module2-component1/module2-component1.component';
import { Module2Component3Component } from './module2-component3/module2-component3.component';
import { Module2Component2Component } from './module2-component2/module2-component2.component';


const routes: Routes = [
  {
    path: 'module2-component1',
    redirectTo: ''
  },
  {
    path: '',
    component: Module2Component1Component
  },
  {
    path: 'module2-component2',
    component: Module2Component2Component
  },
  {
    path: 'module2-component3',
    component: Module2Component3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
