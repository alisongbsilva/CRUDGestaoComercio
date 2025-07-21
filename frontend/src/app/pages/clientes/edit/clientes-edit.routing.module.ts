import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesEditComponent } from './clientes-edit';

const routes: Routes = [
    { path: '', component: ClientesEditComponent },
    { path: 'adicionar', component: ClientesEditComponent },
  { path: 'editar/:id', component: ClientesEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesEditRoutingModule {}