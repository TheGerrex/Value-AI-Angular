import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  // { path: '', component: LoginComponent},
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatModule),
  },
  {
    path: 'library',
    loadChildren: () => import('./prompt-library/prompt-library.module').then( m => m.PromptLibraryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
