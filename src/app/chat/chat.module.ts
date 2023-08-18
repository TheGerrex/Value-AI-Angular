import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    ChatPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class ChatModule { }
