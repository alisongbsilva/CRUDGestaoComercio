import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasIndexComponent } from './empresas-index';

const routes: Routes = [
    { path: '', component: EmpresasIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasIndexRoutingModule {}