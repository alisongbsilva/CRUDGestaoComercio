import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../../services/empresas/empresas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Empresas } from '../../../core/models/empresas/empresas.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/notification';

@Component({
  selector: 'app-empresas-index',
  standalone: false,
  templateUrl: './empresas-index.html',
  styleUrls: ['./empresas-index.scss']
})
export class EmpresasIndexComponent implements OnInit {
  empresas: Empresas[] = [];
  colunas: string[] = ['nomeFantasia', 'razaoSocial', 'cnpj', 'acoes'];

  constructor(
    private service: EmpresasService,
    private snackbar: MatSnackBar,
    private router: Router,
    private notify: NotificationService
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.listar().subscribe((data: any[]) => this.empresas = data);
  }

  abrirFormulario() {
    // abrir modal ou navegar para form
    this.snackbar.open('Abrir formulário (em breve)', '', { duration: 2000 });
  }

  adicionar() {
    this.router.navigate(['/empresas/adicionar']);
  }

  editar(id: string) {
    // abrir modal ou form com dados
    this.router.navigate(['/empresas/editar', id]);
  }

  excluir(id: string) {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.service.excluir(id).subscribe(() => {
        this.notify.show('Empresa removida com sucesso!');
        this.listar();
      });
    }
  }

  irParaInicio() {
    this.router.navigate(['/inicio']);
  }

}