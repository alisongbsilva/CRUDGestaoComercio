import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosIndexComponent } from './pedidos-index';

const routes: Routes = [
    { path: '', component: PedidosIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosIndexRoutingModule {}