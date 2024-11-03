import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { UsuarioResponse } from '../interface/usuario/usuario.interface';
import { LibroService } from '../service/libro/libro.service';
import { LibroResponse } from '../interface/libro/libro.interface';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [NavbarComponent,TableModule, ButtonModule, RatingModule, TagModule, DialogModule, FormsModule, InputTextModule, TreeSelectModule, DropdownModule, ReactiveFormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.scss'
})
export class LibrosComponent  implements OnInit{

  libros: LibroResponse[]  = [];
  busqueda: string = '';

  constructor(private librosService: LibroService){}
 
  ngOnInit(): void {
    this.getLibros();
  }

  onRowClick(libro: LibroResponse) {

    let viewer = document.getElementById("pdf") as HTMLIFrameElement;
    if (viewer) {
      viewer.src = libro.ruta;
    }
      
  }


  getLibros(){
    this.librosService.obtenerLibros().subscribe((response) => {
      this.libros = response;
      return response;
    })
  }

  buscarLibro(busqueda: string){
   
    this.libros.forEach((libro) => {
      if(libro.nombre.includes(busqueda)){
        this.libros = [libro];
      }
    })
  }

  limpiarBusqueda(){
    this.busqueda = '';
    this.getLibros();
  }


}
