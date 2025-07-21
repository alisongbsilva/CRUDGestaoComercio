import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '', 
      children: [
        { path: 'index', loadChildren: () => import('./index/clientes-index.module').then(m => m.ClientesIndexModule) },
        { path: 'adicionar', loadChildren: () => import('./edit/clientes-edit.module').then(m => m.ClientesEditModule) },
        { path: 'editar/:id', loadChildren: () => import('./edit/clientes-edit.module').then(m => m.ClientesEditModule) }
      ]
     },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {}