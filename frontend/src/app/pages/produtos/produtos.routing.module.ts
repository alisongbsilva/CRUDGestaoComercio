import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '', 
      children: [
        { path: 'index', loadChildren: () => import('./index/produtos-index.module').then(m => m.ProdutosIndexModule) },
        { path: 'adicionar', loadChildren: () => import('./edit/produtos-edit.module').then(m => m.ProdutosEditModule) },
        { path: 'editar/:id', loadChildren: () => import('./edit/produtos-edit.module').then(m => m.ProdutosEditModule) }
      ]
     },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule {}