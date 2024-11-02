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
  selector: 'app-libros-edicion',
  standalone: true,
  imports: [NavbarComponent,TableModule, ButtonModule, RatingModule, TagModule, DialogModule, FormsModule, InputTextModule, TreeSelectModule, DropdownModule, ReactiveFormsModule],
  templateUrl: './libros-edicion.component.html',
  styleUrl: './libros-edicion.component.scss'
})
export class LibrosEdicionComponent implements OnInit{

  libros: LibroResponse[] = [];
  visible: boolean = false;
  visible2: boolean = false;

  nombre: string = '';
  autor: string = '';
  genero: string = '';

  selectedFile: File | null = null;


  @ViewChild('fileInput') fileInput!: ElementRef;

  

  
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    }
  }

  getLibros(){
    this.libroService.obtenerLibros().subscribe((response) => {
      this.libros = response;
    });
  }
  constructor(private libroService: LibroService, private fb: FormBuilder){

  }

  

  ngOnInit(): any {
    this.getLibros();
  }

  onRowClick(libro: LibroResponse) {

    let viewer = document.getElementById("pdf") as HTMLIFrameElement;

    if (viewer) {
      viewer.src = libro.ruta;
    }
      
  }

  showDialog(){ 
      this.visible = true;
  }
  showDialog2(){
    this.visible2 = true;
  }



  registrarLibro(libro : {nombre: string, autor: string, genero: string}){

    let libro_string = JSON.stringify(libro);
    const file = this.fileInput.nativeElement.files[0];
    console.log(file);
    this.libroService.createLibro(libro_string, file).subscribe((response) => {
      console.log(response);
      this.visible2 = false;
      window.location.reload();
    });
    
  }
}
