import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '', 
      children: [
        { path: 'index', loadChildren: () => import('./index/empresas-index.module').then(m => m.EmpresasIndexModule) },
        { path: 'adicionar', loadChildren: () => import('./edit/empresas-edit.module').then(m => m.EmpresasEditModule) },
        { path: 'editar/:id', loadChildren: () => import('./edit/empresas-edit.module').then(m => m.EmpresasEditModule) }
      ]
     },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule {}