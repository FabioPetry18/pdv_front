import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from '../../service/loginService';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  template: `
  <div class="min-h-screen min-w-screen flex items-center justify-center flex-col gap-2">
    <h1 class="text-textbase">Login</h1>
    <input [(ngModel)]="form.usuario" type="text" placeholder="Usuário" required>
    <input [(ngModel)]="form.senha" type="password" placeholder="Senha" required>
    <button  (click)="autenticar()" class="p-2 border-2 text-textbase border-white">Entrar</button>
    <div *ngIf="errorMessage" class="text-red-500">{{ errorMessage }}</div>
  </div>
  `,
})
export class LoginComponent {
  form = {
    usuario: "fabio.petry",
    senha: "123456"
  };
  errorMessage: string | null = null;

  constructor(private router: Router, private loginService: LoginService, private authService: AuthService) {}

  autenticar() {
    this.errorMessage = null;

    this.loginService.signUp(this.form).pipe(first()).subscribe({
      next: (res: any) => {
        this.authService.storeUserData(res); 
        sessionStorage.setItem('token', res.token);
        this.goOrder();
      },
      error: (error) => {
        console.error('Erro ao autenticar:', error);
        this.errorMessage = 'Usuário ou senha inválidos.';
      }
    });
  }

  goOrder() {
    console.log("redirecionando");
    this.router.navigate(["/pedido"]);
  }
}