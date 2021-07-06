import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService:UserService, private router:Router) { }

  ngOnInit(): void {

    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
