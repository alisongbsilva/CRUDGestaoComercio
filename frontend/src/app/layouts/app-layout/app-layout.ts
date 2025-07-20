import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule],
  selector: 'app-layout',
  standalone: true,
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss'
})

export class AppLayoutComponent implements OnInit{
  nomeUsuario: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('usuario');
    this.nomeUsuario = user ? JSON.parse(user).nome : '';
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}