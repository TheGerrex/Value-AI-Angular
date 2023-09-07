import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {
  columnSettingsOpenMobile = false;
  checked = true;

  toggleLayoutFunctionSettings() {
    console.log("button settings emits");
    this.ontoggleSettings();
  }
  

  ontoggleSettings() {
    this.columnSettingsOpenMobile = !this.columnSettingsOpenMobile;

    // Toggle the overflow class on the parent container
    const dashboardLayout = document.getElementById('dashboard-layout');
    if (dashboardLayout) {
      dashboardLayout.classList.toggle('overflow-hidden', this.columnSettingsOpenMobile);
    }
  }
}
