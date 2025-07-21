import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosIndexComponent } from './produtos-index';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CnpjPipeModule } from '../../../core/pipes/cnpj.pipe.module';
import { ProdutosIndexRoutingModule } from './produtos-index.routing.module';

@NgModule({
  declarations: [ProdutosIndexComponent],
  imports: [
    CommonModule,
    ProdutosIndexRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    CnpjPipeModule
  ]
})
export class ProdutosIndexModule {}