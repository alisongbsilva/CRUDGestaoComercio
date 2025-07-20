import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth.service';
import { NotificationService } from '../../../core/notification';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})

export class CadastroComponent {
  dados = {
    nome: '',
    email: '',
    senha: ''
};
  constructor(
    private auth: AuthService,
    private router: Router,
    private notify: NotificationService
  ) {}

  cadastro() {
    this.auth.cadastrarUsuario(this.dados).subscribe({
      next: () => {
        this.notify.show('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro no cadastro:', err);
        this.notify.show('Erro ao cadastrar', 'Fechar', 3000);
      }
    });
  }

  irParaLogin() {
    this.router.navigate(['/login']);
  }
}