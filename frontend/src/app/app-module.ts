import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from './core/auth-interceptor';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';

@NgModule({
  declarations: [
    App,
    Login,
    Register
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useValue: authInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
