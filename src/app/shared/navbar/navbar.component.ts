import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  checked: boolean = true;
  @Output() toggleFunctionChats = new EventEmitter<void>();
  @Output() toggleFunctionPlugins = new EventEmitter<void>();

  onButtonClickedChat() {
    this.toggleFunctionChats.emit();
  }
  onButtonClickedPlugin() {
    this.toggleFunctionPlugins.emit();
  }

}
