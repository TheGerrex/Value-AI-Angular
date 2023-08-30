import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {
  columnChatsOpen = true;
  columnChatsOpenMobile = false;
  columnPluginsOpen = true;
  columnPluginsOpenTablet = false;
  columnPluginsOpenMobile = false;
  columnSettingsOpenMobile = false;
  checked = true;
  displayModalFilesUpload: boolean = false;

  toggleLayoutFunctionPlugins() {
    console.log("button plugins emits");
    this.ontogglePlugins();
  }
  
  toggleLayoutFunctionChats() {
    console.log("button chats emits");
    this.ontoggleChats();
  }
  
  ontoggleChats() {
    this.columnChatsOpen = !this.columnChatsOpen;
    if (  window.innerWidth >= 768 && window.innerWidth <= 992) {
      this.columnPluginsOpenTablet = false;
    }
    if (  window.innerWidth <= 768 ) {
      this.columnChatsOpenMobile = !this.columnChatsOpenMobile;
    }
    
  }
  ontogglePlugins() {
    this.columnPluginsOpen = !this.columnPluginsOpen;
    
    if (  window.innerWidth >= 768 && window.innerWidth <= 992) {
      this.columnChatsOpen = false;
      this.columnPluginsOpenTablet = !this.columnPluginsOpenTablet;
    }
    if (  window.innerWidth <= 768 ) {
      this.columnPluginsOpenMobile = !this.columnPluginsOpenMobile;
    }
    // console.log("Tablet:", this.columnPluginsOpenTablet)
  }
  ontoggleSettings() {
    this.columnSettingsOpenMobile = !this.columnSettingsOpenMobile;
    
  }

  showModalFilesUpload() {
    this.displayModalFilesUpload = true;
  }

  hideModalFilesUpload() {
    this.displayModalFilesUpload = false;
  }


  ngOnInit() {
    if (  window.innerWidth >= 768) {
      this.columnSettingsOpenMobile = false;
    }
  }
}
