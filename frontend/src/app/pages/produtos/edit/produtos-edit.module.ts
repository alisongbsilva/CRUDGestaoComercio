import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosEditComponent } from './produtos-edit';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CnpjPipeModule } from '../../../core/pipes/cnpj.pipe.module';
import { ProdutosEditRoutingModule } from './produtos-edit.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ProdutosEditComponent],
  imports: [
    CommonModule,
    ProdutosEditRoutingModule,
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
export class ProdutosEditModule {}