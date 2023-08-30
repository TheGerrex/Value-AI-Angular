import { Component, OnInit, ViewChild } from '@angular/core';
import { PromptLibraryComponent } from '../../components/prompt-library/prompt-library.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  @ViewChild(PromptLibraryComponent) modal!: PromptLibraryComponent;
  columnChatsOpen = true;
  columnPluginsOpen = true;
  columnPluginsOpenTablet = false;
  
  toggleChats() {
    this.columnChatsOpen = !this.columnChatsOpen;
    if (  window.innerWidth >= 768 && window.innerWidth <= 992) {
      this.columnPluginsOpenTablet = false;
    }
    
  }
  togglePlugins() {
    this.columnPluginsOpen = !this.columnPluginsOpen;
    
    if (  window.innerWidth >= 768 && window.innerWidth <= 992) {
      this.columnChatsOpen = false;
      this.columnPluginsOpenTablet = !this.columnPluginsOpenTablet;
    }
  }

  ngOnInit() {
    
  }

  openModal() {
    this.modal.showModal();
  }
}
