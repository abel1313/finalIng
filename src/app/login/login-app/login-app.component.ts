import { Component, OnInit, HostBinding } from '@angular/core';
import { ServiceAppService } from 'src/app/service/service-app.service';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {

  @HostBinding('class') classLogin = 'row';

  usuario : any = 
  {
   
    nombreUsuario : '',
    contraUsuario : ''
    
  }

  constructor(private service: ServiceAppService) { }

  ngOnInit(): void
  {

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

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


btnAccederSistema()
{
  this.service.getOneUsuario(this.usuario)
  .subscribe(
    res =>
    {
      console.log(res);
    },
    error=> console.log(error)
  );
    console.log(this.usuario);
}

  }

