import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PromptLibraryPageComponent } from './pages/prompt-library-page/prompt-library-page.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutPageComponent,
      children: [
        {path: 'prompt-library', component: PromptLibraryPageComponent},
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PromptLibraryRoutingModule { }