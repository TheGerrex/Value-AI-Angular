import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardResumenPageComponent } from './pages/dashboard-resumen-page/dashboard-resumen-page.component';
import { DashboardChatsPageComponent } from './pages/dashboard-chats-page/dashboard-chats-page.component';
import { DashboardConsultasPageComponent } from './pages/dashboard-consultas-page/dashboard-consultas-page.component';
import { DashboardAgentesVentasPageComponent } from './pages/dashboard-agentes-ventas-page/dashboard-agentes-ventas-page.component';
import { DashboardAgentesGeneralPageComponent } from './pages/dashboard-agentes-general-page/dashboard-agentes-general-page.component';
import { NavDashboardComponent } from './components/nav-dashboard/nav-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FilterDashboardComponent } from './components/filter-dashboard/filter-dashboard.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutPageComponent,
    DashboardResumenPageComponent,
    DashboardChatsPageComponent,
    DashboardConsultasPageComponent,
    DashboardAgentesVentasPageComponent,
    DashboardAgentesGeneralPageComponent,
    NavDashboardComponent,
    FilterDashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PrimengModule,
    FormsModule,
  ]
})
export class DashboardModule { }
