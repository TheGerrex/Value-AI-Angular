import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { PromptLibraryComponent } from './components/prompt-library/prompt-library.component';




@NgModule({
  declarations: [
    ChatPageComponent,
    LayoutPageComponent,
    ChatInputComponent,
    PromptLibraryComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    PrimengModule,
    FormsModule,
  ]
})
export class ChatModule { }
