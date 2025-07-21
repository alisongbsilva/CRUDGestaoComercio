import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/notification';
import { PedidosService } from '../../../services/pedidos/pedidos.service';
import { Pedidos } from '../../../core/models/pedidos/pedidos.model';

@Component({
  selector: 'app-pedidos-index',
  standalone: false,
  templateUrl: './pedidos-index.html',
  styleUrls: ['./pedidos-index.scss']
})
export class PedidosIndexComponent implements OnInit {
  pedidos: Pedidos[] = [];
  colunas: string[] = ['numero', 'razaoSocial', 'clienteId', 'empresaId', 'observacao', 'data', 'acoes'];

  constructor(
    private service: PedidosService,
    private snackbar: MatSnackBar,
    private router: Router,
    private notify: NotificationService
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.listar().subscribe((data: any[]) => this.pedidos = data);
  }

  abrirFormulario() {
    // abrir modal ou navegar para form
    this.snackbar.open('Abrir formulário (em breve)', '', { duration: 2000 });
  }

  adicionar() {
    this.router.navigate(['/pedidos/adicionar']);
  }

  editar(id: string) {
    // abrir modal ou form com dados
    this.router.navigate(['/pedidos/editar', id]);
  }

  excluir(id: string) {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.service.excluir(id).subscribe(() => {
        this.notify.show('Pedido removido com sucesso!');
        this.listar();
      });
    }
  }

  irParaInicio() {
    this.router.navigate(['/inicio']);
  }

}