import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import { routes as GeneralRoutes } from "./general-layout/general-layout.routes";
import {routes as DashboardRoutes} from "./dashboard-layout/dashboard-layout.routes";


import {AngularMaterialModule} from './../angular-material/angular-material.module';

@NgModule({
  declarations: [DashboardLayoutComponent, GeneralLayoutComponent],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild([...GeneralRoutes, ...DashboardRoutes])
  ],
  exports: [DashboardLayoutComponent, GeneralLayoutComponent, AngularMaterialModule]
})
export class LayoutsModule { }
