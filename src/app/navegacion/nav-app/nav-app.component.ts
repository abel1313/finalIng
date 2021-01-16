import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-app',
  templateUrl: './nav-app.component.html',
  styleUrls: ['./nav-app.component.css']
})
export class NavAppComponent implements OnInit {
  @HostBinding("class") class = "row"

  constructor() { }


  ngOnInit(): void {
  }

}
