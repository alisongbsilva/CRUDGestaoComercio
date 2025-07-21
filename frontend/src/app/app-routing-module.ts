import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './pages/auth/auth-guard';
import { LoginComponent } from './pages/auth/login/login';
import { CadastroComponent } from './pages/auth/cadastro/cadastro';
import { AppLayoutComponent } from './layouts//app-layout/app-layout';
import { InicioComponent } from './pages/inicio/inicio';

const routes: Routes = [
  { 
    path: '',
    component: AppLayoutComponent,
    canActivateChild: [authGuard],
    children: [
      { path: 'inicio', component: InicioComponent },
      {
        path: 'empresas',
        loadChildren: () => import('./pages/empresas/empresas.module').then(m => m.EmpresasModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesModule)
      },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },
  
   { path: 'login', component: LoginComponent },
   { path: 'cadastro', component: CadastroComponent },
   { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
