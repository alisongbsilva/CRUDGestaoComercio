import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/notification';
import { Produtos } from '../../../core/models/produtos/produtos.model';
import { ProdutosService } from '../../../services/produtos/produtos.service';

@Component({
  selector: 'app-produtos-index',
  standalone: false,
  templateUrl: './produtos-index.html',
  styleUrls: ['./produtos-index.scss']
})
export class ProdutosIndexComponent implements OnInit {
  produtos: Produtos[] = [];
  colunas: string[] = ['nome', 'valor', 'descricao', 'empresaId', 'acoes'];

  constructor(
    private service: ProdutosService,
    private snackbar: MatSnackBar,
    private router: Router,
    private notify: NotificationService
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.listar().subscribe((data: any[]) => this.produtos = data);
  }

  abrirFormulario() {
    // abrir modal ou navegar para form
    this.snackbar.open('Abrir formulário (em breve)', '', { duration: 2000 });
  }

  adicionar() {
    this.router.navigate(['/produtos/adicionar']);
  }

  editar(id: string) {
    // abrir modal ou form com dados
    this.router.navigate(['/produtos/editar', id]);
  }

  excluir(id: string) {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.service.excluir(id).subscribe(() => {
        this.notify.show('Produto removido com sucesso!');
        this.listar();
      });
    }
  }

  irParaInicio() {
    this.router.navigate(['/inicio']);
  }

}