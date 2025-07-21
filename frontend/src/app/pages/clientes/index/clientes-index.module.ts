import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CnpjPipeModule } from '../../../core/pipes/cnpj.pipe.module';
import { ClientesIndexRoutingModule } from './clientes-index.routing.module';
import { ClientesIndexComponent } from './clientes-index';

@NgModule({
  declarations: [ClientesIndexComponent],
  imports: [
    CommonModule,
    ClientesIndexRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    CnpjPipeModule
  ]
})
export class ClientesIndexModule {}