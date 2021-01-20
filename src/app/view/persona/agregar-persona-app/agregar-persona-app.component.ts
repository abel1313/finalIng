import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-agregar-persona-app',
  templateUrl: './agregar-persona-app.component.html',
  styleUrls: ['./agregar-persona-app.component.css']
})
export class AgregarPersonaAppComponent implements OnInit {
@HostBinding('class') class = 'row p-3';

persona: any = [];
selectdGenero = 'Seleccione su género';

  constructor() { }

  ngOnInit(): void
  {
    document.getElementById('diste').addEventListener('click', () =>
    {
      console.log('Sis');
    });
  }

  dis(): void
  {
    console.log('s');
  }


}
