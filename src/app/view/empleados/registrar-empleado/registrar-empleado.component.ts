import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  @HostBinding('class') class="row"
  constructor() { }

  ngOnInit(): void {
  }

}
