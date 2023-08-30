import { Component, HostListener, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent {
  chatInputSettingsVisible: boolean = false;
  displayModalPrompt: boolean = false;
  displayModalShareChat: boolean = false;
  displayModalFilesUpload: boolean = false;

  toggleChatInputSettings() {
    this.chatInputSettingsVisible = !this.chatInputSettingsVisible;
  }
  
  toggleChatShareModal() {
    this.showModalShareChat();
  }

  toggleFilesUploadModal() {
    this.showModalFilesUpload();
  }

  showModalPrompt() {
    this.displayModalPrompt = true;
  }

  hideModalPrompt() {
    this.displayModalPrompt = false;
  }

  showModalShareChat() {
    this.displayModalShareChat = true;
  }

  hideModalShareChat() {
    this.displayModalShareChat = false;
  }

  showModalFilesUpload() {
    this.displayModalShareChat = true;
  }

  hideModalFilesUpload() {
    this.displayModalShareChat = false;
  }

}
