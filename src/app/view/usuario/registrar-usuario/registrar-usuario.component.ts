import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
@HostBinding('clas rows')class = 'row';
  constructor() { }

  ngOnInit(): void {
  }

}
