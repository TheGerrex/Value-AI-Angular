import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PromptLibraryPageComponent } from './pages/prompt-library-page/prompt-library-page.component';
import { PromptLibraryRoutingModule } from './prompt-library-routing.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    PromptLibraryPageComponent,
  ],
  imports: [
    CommonModule,
    PromptLibraryRoutingModule
  ]
})
export class PromptLibraryModule { }
