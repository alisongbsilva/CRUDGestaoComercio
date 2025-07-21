import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosIndexComponent } from './pedidos-index';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CnpjPipeModule } from '../../../core/pipes/cnpj.pipe.module';
import { PedidosIndexRoutingModule } from './pedidos-index.routing.module';

@NgModule({
  declarations: [PedidosIndexComponent],
  imports: [
    CommonModule,
    PedidosIndexRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    CnpjPipeModule
  ]
})
export class PedidosIndexModule {}