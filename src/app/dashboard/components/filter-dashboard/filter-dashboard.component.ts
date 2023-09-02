import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-dashboard',
  templateUrl: './filter-dashboard.component.html',
  styleUrls: ['./filter-dashboard.component.scss']
})
export class FilterDashboardComponent {
  rangeDates: Date[] | undefined;
}
