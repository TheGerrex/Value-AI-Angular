import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsultasPageComponent } from './dashboard-consultas-page.component';

describe('DashboardConsultasPageComponent', () => {
  let component: DashboardConsultasPageComponent;
  let fixture: ComponentFixture<DashboardConsultasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardConsultasPageComponent]
    });
    fixture = TestBed.createComponent(DashboardConsultasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
