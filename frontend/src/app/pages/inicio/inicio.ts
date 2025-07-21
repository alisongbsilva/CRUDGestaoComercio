import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { NotificationService } from '../../core/notification';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class InicioComponent {
  constructor(
      private auth: AuthService,
      private router: Router,
      private notify: NotificationService
    ) {}

  irParaEmpresas() {
    this.router.navigate(['/empresas']);
  }

  irParaClientes() {
    this.router.navigate(['/clientes']);
  }

  irParaProdutos() {
    this.router.navigate(['/produtos']);
  }

  irParaPedidos() {
    this.router.navigate(['/pedidos']);
  }

}
