import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '', 
      children: [
        { path: 'index', loadChildren: () => import('./index/empresas-index.module').then(m => m.EmpresasIndexModule) },
      ]
     },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule {}