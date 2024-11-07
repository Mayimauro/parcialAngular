import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ServicioUsuario} from "../../service/servicio-usuario.service";
import {UserInterface} from "../../interface/user.interface";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(private router: Router) {
  }

  fb = inject(FormBuilder);
  usuarioService = inject(ServicioUsuario);

  formulario = this.fb.nonNullable.group({
    nombreUsuario: ['', Validators.required],
    contrasenia: ['', Validators.required]
  })


  verificarDatos(){
    if(this.formulario.invalid){return}
    const user = this.formulario.getRawValue();

    this.VerificarUserBdd(user);

    this.formulario.reset();

  }

  VerificarUserBdd(userAconfirmar: UserInterface){
    this.usuarioService.getUsuarios().subscribe({
      next: (usuarios: UserInterface[])=>{
        usuarios.forEach(usuario => {
          if(usuario.contrasenia === userAconfirmar.contrasenia && usuario.nombreUsuario === userAconfirmar.nombreUsuario){
            alert("Bienvenido!!, seras redirigido a agregar producto");
            this.router.navigate(['../productos']);
          }else{
            alert("contraseña o usuario inconrrecto");
          }
        })
        },error: (e)=>{
        console.error(e);
      }
    })
  }



}
