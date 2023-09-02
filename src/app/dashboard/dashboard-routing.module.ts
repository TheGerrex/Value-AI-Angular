import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardResumenPageComponent } from './pages/dashboard-resumen-page/dashboard-resumen-page.component';
import { DashboardChatsPageComponent } from './pages/dashboard-chats-page/dashboard-chats-page.component';
import { DashboardConsultasPageComponent } from './pages/dashboard-consultas-page/dashboard-consultas-page.component';
import { DashboardAgentesVentasPageComponent } from './pages/dashboard-agentes-ventas-page/dashboard-agentes-ventas-page.component';
import { DashboardAgentesGeneralPageComponent } from './pages/dashboard-agentes-general-page/dashboard-agentes-general-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
          {path: 'resumen', component: DashboardResumenPageComponent},
          {path: 'chats', component: DashboardChatsPageComponent},
          {path: 'consultas', component: DashboardConsultasPageComponent},
          {path: 'agentes-ventas', component: DashboardAgentesVentasPageComponent},
          {path: 'agentes-general', component: DashboardAgentesGeneralPageComponent},
        ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }