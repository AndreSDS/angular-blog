import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '@/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName = '';
  private loginSubscription !: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginSubscription = this.loginService.getUserName().subscribe((name) => {
      this.userName = name.charAt(0).toUpperCase();
    });
  }

  onLogout(): void {
    this.loginService.setUserName('');
    this.loginSubscription.unsubscribe();
    this.router.navigate(['login'])
  }
}
