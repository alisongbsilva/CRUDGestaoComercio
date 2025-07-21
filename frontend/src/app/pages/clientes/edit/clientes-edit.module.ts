import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesEditComponent } from './clientes-edit';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CnpjPipeModule } from '../../../core/pipes/cnpj.pipe.module';
import { ClientesEditRoutingModule } from './clientes-edit.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ClientesEditComponent],
  imports: [
    CommonModule,
    ClientesEditRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    CnpjPipeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ClientesEditModule {}