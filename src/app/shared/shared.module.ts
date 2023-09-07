import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarDashboardComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    NavbarDashboardComponent,
  ]
})
export class SharedModule { }
