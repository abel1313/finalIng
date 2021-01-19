import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {
@HostBinding('class') class="row"
  constructor() { }

  ngOnInit(): void {
  }

}
