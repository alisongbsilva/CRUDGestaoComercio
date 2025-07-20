import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './pages/auth/auth-guard';
import { LoginComponent } from './pages/auth/login/login';
import { InicioComponent } from './pages/inicio/inicio';
import { CadastroComponent } from './pages/auth/cadastro/cadastro';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { 
    path: '',
    canActivateChild: [authGuard],
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },

   { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
