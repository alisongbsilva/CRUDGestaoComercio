import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosEditComponent } from './produtos-edit';

const routes: Routes = [
    { path: '', component: ProdutosEditComponent },
    { path: 'adicionar', component: ProdutosEditComponent },
  { path: 'editar/:id', component: ProdutosEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosEditRoutingModule {}