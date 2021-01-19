import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent implements OnInit {
  @HostBinding('class') class = 'row p-3 border';
  constructor() { }

  ngOnInit(): void {
  }

}
