import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {

  @HostBinding('class') classLogin = 'row';

  constructor() { }

  ngOnInit(): void {
  }

}
