import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { UsuariosComponent } from "../usuarios/usuarios.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, UsuariosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
