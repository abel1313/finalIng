
import { Component, HostBinding, OnInit } from '@angular/core';
import { ServiceAppService } from '../../../service/service-app.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
@HostBinding('class') class = 'row';

// Usuario de tipo Usuario
// usuarioRegistrar: Usuario = {};
usuarioRegistrar: any =
{
  username: '',
  contra:  '',
  confirmarContra: ''
};

usuReg: any = [];

  constructor(private service: ServiceAppService) { }

  ngOnInit(): void
  {

  }

  registerUser(): void
  {
    console.log(this.usuarioRegistrar);
  }

  mostrarUsuarios(): void
  {
    this.service.obtenerUsuarios().subscribe
    (
      res =>
      {
        this.usuReg = res;
      },
      error => console.log(error)

      );
  }

}
