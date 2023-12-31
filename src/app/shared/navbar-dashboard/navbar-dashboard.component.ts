import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.scss']
})
export class NavbarDashboardComponent {
  checked: boolean = true;
  @Output() toggleFunctionSettings = new EventEmitter<void>();

  onButtonClickedSettings() {
    this.toggleFunctionSettings.emit();
  }
}
