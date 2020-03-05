import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { NavbarModule } from '../navbar/navbar.module';
import {routes as DashboardRoutes} from './dashboard-layout/dashboard-layout.route'; 



@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild([...DashboardRoutes])
  ],
  exports: [DashboardLayoutComponent]
})
export class LayoutModule { 
  constructor() {
    console.log("#LayoutModule");
  }
}
