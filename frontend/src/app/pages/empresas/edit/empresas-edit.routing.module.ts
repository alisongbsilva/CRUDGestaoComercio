import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasEditComponent } from './empresas-edit';

const routes: Routes = [
    { path: '', component: EmpresasEditComponent },
    { path: 'adicionar', component: EmpresasEditComponent },
  { path: 'editar/:id', component: EmpresasEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasEditRoutingModule {}