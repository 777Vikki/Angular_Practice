import { Routes } from "@angular/router";
import { GeneralLayoutComponent } from "./general-layout.component";

export const routes: Routes = [
  {
    path: "auth",
    component: GeneralLayoutComponent,
    loadChildren: () =>
      import("./../../pages/auth/auth.module").then(mod => mod.AuthModule)
  }
];
