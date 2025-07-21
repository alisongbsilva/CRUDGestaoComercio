import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasIndexComponent } from './empresas-index';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CnpjPipeModule } from '../../../core/pipes/cnpj.pipe.module';
import { EmpresasIndexRoutingModule } from './empresas-index.routing.module';

@NgModule({
  declarations: [EmpresasIndexComponent],
  imports: [
    CommonModule,
    EmpresasIndexRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    CnpjPipeModule
  ]
})
export class EmpresasIndexModule {}