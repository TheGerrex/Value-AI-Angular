import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface navOption {
  name: string;
  route: string;
}

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.scss']
})
export class NavDashboardComponent {
  navOptions: navOption[] | undefined;
  selectedNavOption: navOption | undefined;

  constructor(private router: Router) { }

  navigateToPage(selectedNavOption: navOption | undefined) {
    if (selectedNavOption && selectedNavOption.route) {
      this.router.navigate([selectedNavOption.route]);
    }
  }

  onModelChange(event: any) {
    console.log('Selected option:', event);
  }
  
  ngOnInit() {
    this.navOptions = [
      { name: 'Resumen', route: '/dashboard/resumen' },
      { name: 'Chats', route: '/dashboard/chats' },
      { name: 'Consultas', route: '/dashboard/consultas' },
      { name: 'Agentes de ventas', route: '/dashboard/agentes-ventas' },
      { name: 'Agentes de uso general', route: '/dashboard/agentes-general' },
    ];
  }

}
