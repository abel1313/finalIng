import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-direccion-app',
  templateUrl: './agregar-direccion-app.component.html',
  styleUrls: ['./agregar-direccion-app.component.css']
})
export class AgregarDireccionAppComponent implements OnInit {

direccion: any = [];
selectedGenero = 'Seleccione su género';

  constructor() { }

  ngOnInit(): void
  {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.validarDireccion');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach((form: any) => {
      form.addEventListener('submit', (event: any) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }

}
