import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {
@HostBinding('class') calss = 'row border p-3';
  constructor() { }

  ngOnInit(): void {
  }

}
