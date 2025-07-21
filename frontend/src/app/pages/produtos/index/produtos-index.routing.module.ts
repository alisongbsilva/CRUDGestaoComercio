import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosIndexComponent } from './produtos-index';

const routes: Routes = [
    { path: '', component: ProdutosIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosIndexRoutingModule {}