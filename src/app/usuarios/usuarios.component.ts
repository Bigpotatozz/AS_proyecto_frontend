import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext'; // Añadir este import
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../service/usuario/usuario.service';

import { UsuarioRequest, UsuarioResponse } from '../interface/usuario/usuario.interface';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NavbarComponent, TableModule, ButtonModule, RatingModule, TagModule, DialogModule, FormsModule, InputTextModule, TreeSelectModule, DropdownModule, ReactiveFormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit{

  usuarios: UsuarioResponse[] = [];
  visible: boolean = false;
  visible2: boolean = false;

  nombre: string = '';
  correo: string = '';
  id_usuario: number = 0;

  rolForm: FormGroup; 
  roles: any[];

  

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder){
    this.rolForm = this.fb.group({
      selectedRole: [''] // Control para el rol seleccionado
    });
    this.roles = [{name: 'Administrador', value: 'ADMINISTRADOR'},
      {name: 'Estudiante', value: 'ESTUDIANTE'},
      {name: 'Bibliotecario', value: 'BIBLIOTECARIO'},
      
    ];
  }

  getUsuarios(){
    this.usuarioService.obtenerUsuarios().subscribe((response) => {
      this.usuarios = response;
      console.log(this.usuarios);
    })
  }

  ngOnInit(): any {
    this.getUsuarios();
  }

  showDialog(usuario: UsuarioResponse){ 
      this.visible = true;
      this.id_usuario = usuario.id_usuario;

  }
  showDialog2(){
    this.visible2 = true;
  }

  actualizarUsuario(usuario: {nombre: string, correo: string}){
    console.log(usuario);
    this.usuarioService.updateUsuario({nombre: usuario.nombre, correo: usuario.correo, id_usuario: this.id_usuario}).subscribe((response) => {
      console.log(response);
      this.getUsuarios();
      this.visible = false;
    });
  }

}
