import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';

import {AngularMaterialModule} from './../../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AngularMaterialModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
