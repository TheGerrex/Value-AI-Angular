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
      // this.columnChatsOpen = !this.columnChatsOpen;
    }
    console.log("toggleChats")
    console.log("Column chats", this.columnChatsOpen)
    console.log("Column plugin", this.columnPluginsOpen)
    console.log("Column plugin tablet", this.columnPluginsOpenTablet)
  }
  togglePlugins() {
    this.columnPluginsOpen = !this.columnPluginsOpen;
    
    if (  window.innerWidth >= 768 && window.innerWidth <= 992) {
      this.columnChatsOpen = false;
      this.columnPluginsOpenTablet = !this.columnPluginsOpenTablet;
    }
    console.log("togglePlugins")
    console.log("Column chats", this.columnChatsOpen)
    console.log("Column plugin", this.columnPluginsOpen)
    console.log("Column plugin tablet", this.columnPluginsOpenTablet)
  }

  ngOnInit() {
    // Close the sidenav on initialization for smaller screens
    // if (  window.innerWidth <= 768 && window.innerWidth >= 992) {
    //   this.columnChatsOpen = false;
    // }
    
  }

  openModal() {
    this.modal.showModal();
  }
}
