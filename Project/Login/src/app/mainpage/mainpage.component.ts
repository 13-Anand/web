import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  login: string;
  password: string;
  constructor(private router: Router) {}
  ngOnInit() {
  }
  Login() {
    if (this.login === 'Admin' && this.password === 'Admin123') {
      console.log('Working');
      this.router.navigate(['Adminpage']);
    } else {
      this.router.navigate(['user']);
    }
  }
}
