import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/notification';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private notify: NotificationService
  ) {}

  login() {
    this.auth.login(this.email, this.senha).subscribe({
      next: (response) => {
        this.notify.show('Login realizado com sucesso!');
        this.router.navigate(['inicio']);
      },
      error: () => {
        this.notify.show('Email ou senha inválidos', 'Fechar', 3000);
      }
    });
  }
}
