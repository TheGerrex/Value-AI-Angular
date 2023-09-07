import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    InputSwitchModule,
    DialogModule,
    TabViewModule,
    CalendarModule,
    DropdownModule,
    ChartModule
  ]
})
export class PrimengModule { }
