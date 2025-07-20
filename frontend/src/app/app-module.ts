import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth-interceptor';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './pages/auth/login/login';
import { CadastroComponent } from './pages/auth/cadastro/cadastro';
import { InicioComponent } from './pages/inicio/inicio';
;

@NgModule({
  declarations: [
    App,
    LoginComponent,
    CadastroComponent,
    InicioComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
