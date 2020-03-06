import { Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./dashboard-layout.component";
import { AuthGuard } from 'src/app/pages/auth/auth.guard';

export const routes: Routes = [
  {
    path: "home1",
    canActivate: [AuthGuard],
    component: DashboardLayoutComponent,
    loadChildren: () => 
      import("./../../pages/home1/home1.module").then(mod => mod.Home1Module)
  },
  {
    path: "dashboard",
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import("./../../pages/dashboard/dashboard.module").then(
        mod => mod.DashboardModule
      )
  },
  {
    path: "home2",
    component: DashboardLayoutComponent,
    loadChildren: () => 
      import("./../../pages/home2/home2.module").then(mod => mod.Home2Module)
  }
];
