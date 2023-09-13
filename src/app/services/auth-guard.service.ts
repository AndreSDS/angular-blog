import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {
    let isLogged: boolean = this.loginService.isAuthenticated();

    if (!isLogged) {
      this.router.navigate(['login'])
    }

    return isLogged;
  }
}
