import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutPageComponent,
      children: [
        {path: '', component: DefaultPageComponent},
        {path: ':id', component: ChatPageComponent},
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ChatRoutingModule { }