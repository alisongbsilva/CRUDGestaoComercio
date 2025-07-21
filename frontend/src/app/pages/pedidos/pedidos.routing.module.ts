import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '', 
      children: [
        { path: 'index', loadChildren: () => import('./index/pedidos-index.module').then(m => m.PedidosIndexModule) },
        { path: 'adicionar', loadChildren: () => import('./edit/pedidos-edit.module').then(m => m.PedidosEditModule) },
        { path: 'editar/:id', loadChildren: () => import('./edit/pedidos-edit.module').then(m => m.PedidosEditModule) }
      ]
     },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule {}