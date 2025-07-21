import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosEditComponent } from './pedidos-edit';

const routes: Routes = [
    { path: '', component: PedidosEditComponent },
    { path: 'adicionar', component: PedidosEditComponent },
  { path: 'editar/:id', component: PedidosEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosEditRoutingModule {}