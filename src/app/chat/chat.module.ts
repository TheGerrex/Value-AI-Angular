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
import { RouterModule } from '@angular/router';
import { MessageService } from './services/message.service';
import { DefaultPageComponent } from './pages/default-page/default-page.component';




@NgModule({
  declarations: [
    ChatPageComponent,
    LayoutPageComponent,
    ChatInputComponent,
    PromptLibraryComponent,
    DefaultPageComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    PrimengModule,
    FormsModule,
    RouterModule,
  ],
  providers: [MessageService],
})
export class ChatModule { }
