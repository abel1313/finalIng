import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-permiso-app',
  templateUrl: './agregar-permiso-app.component.html',
  styleUrls: ['./agregar-permiso-app.component.css']
})
export class AgregarPermisoAppComponent implements OnInit {
@HostBinding('class')class = 'row p-3';
  constructor() { }

  ngOnInit(): void {
  }

}
