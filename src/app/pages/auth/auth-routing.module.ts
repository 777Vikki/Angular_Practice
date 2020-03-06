import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  {
    path: "sign-in",
    redirectTo: ""
  },
  {
    path: "",
    pathMatch: 'full',
    component: SignInComponent
  },
  {
    path: "404",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  constructor() {
    console.log("#AuthRoutingModule");
  }
}
