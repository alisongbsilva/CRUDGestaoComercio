import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../services/clientes/clientes.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/notification';
import { Clientes } from '../../../core/models/clientes/clientes.model';

@Component({
  selector: 'app-clientes-index',
  standalone: false,
  templateUrl: './clientes-index.html',
  styleUrls: ['./clientes-index.scss']
})
export class ClientesIndexComponent implements OnInit {
  clientes: Clientes[] = [];
  colunas: string[] = ['nome', 'email', 'telefone', 'empresaId', 'acoes'];

  constructor(
    private service: ClientesService,
    private router: Router,
    private notify: NotificationService
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.listar().subscribe((data: any[]) => this.clientes = data);
  }

  abrirFormulario() {
    // abrir modal ou navegar para form
    this.notify.show('Abrir formulário (em breve)');
  }

  adicionar() {
    this.router.navigate(['/clientes/adicionar']);
  }

  editar(id: string) {
    // abrir modal ou form com dados
    this.router.navigate(['/clientes/editar', id]);
  }

  excluir(id: string) {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.service.excluir(id).subscribe(() => {
        this.notify.show('Cliente removido com sucesso!');
        this.listar();
      });
    }
  }

  irParaInicio() {
    this.router.navigate(['/inicio']);
  }

}