import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import {AngularMaterialModule} from './../../angular-material/angular-material.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
