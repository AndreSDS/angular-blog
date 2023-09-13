import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin !: FormGroup;

  constructor(
    private route: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      userName: [null],
      password: [null]
    })
  }

  onLogin(): void {
    console.log(this.formLogin.value);
    const {userName, password} = this.formLogin.value;

    if(userName.trim() && password.trim()){
      this.loginService.setUserName(userName);
      this.route.navigate(["home"]);
    }
  }

  onLogout(): void {
    this.loginService.setUserName('');
  }
}
