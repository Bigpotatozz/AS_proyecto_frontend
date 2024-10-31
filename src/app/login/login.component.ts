import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../service/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, ButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  correo: string = '';
  contrasenia: string = '';

  constructor(private authService: AuthService, private router: Router){}
  
  

  login(correo: string, contrasenia: string){
    this.authService.login(correo, contrasenia).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/home']);
      localStorage.setItem('rol', response.usuario.rol);
      return response;
    }, (error) => {
      return error;
    })
  }


}
