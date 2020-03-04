import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatToolbarModule, 
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule
} from  '@angular/material';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
]
})
export class AngularMaterialModule { }
