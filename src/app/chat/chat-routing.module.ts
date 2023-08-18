import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutPageComponent,
      children: [
        {path: 'chat', component: ChatPageComponent},
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ChatRoutingModule { }