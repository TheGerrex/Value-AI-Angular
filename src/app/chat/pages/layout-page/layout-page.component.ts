import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {
  sidenavOpen = false;
  containerOpen = false;

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
    this.containerOpen = !this.containerOpen;
  }
}
