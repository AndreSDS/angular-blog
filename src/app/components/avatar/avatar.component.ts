import { LoginService } from '@/services/login.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() iconUser = '';

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService.getUserName().subscribe((name) => {
      this.iconUser = name.charAt(0).toUpperCase();
    });
  }
}
