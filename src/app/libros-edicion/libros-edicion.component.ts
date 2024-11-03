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

  nombre_modificar: string = '';
  autor_modificar: string = '';
  genero_modificar: string = '';


  selectedFile: File | null = null;
  selectedFile2: File | null = null;

  id_libro: number = 0;


  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('fileInput2') fileInput2!: ElementRef;

  constructor(private libroService: LibroService, private fb: FormBuilder){}

  
  ngOnInit(): any {
    this.getLibros();
  }


  
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
      console.log(this.selectedFile);
    }
  }

  onFileSelected2(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFile2 = files[0];
    }
  }

  getLibros(){
    this.libroService.obtenerLibros().subscribe((response) => {
      this.libros = response;
    });
  }

  

  onRowClick(libro: LibroResponse) {

    let viewer = document.getElementById("pdf") as HTMLIFrameElement;
    if (viewer) {
      viewer.src = libro.ruta;
    }
      
  }

  showDialog(libro: any){ 
          this.visible = true;
    this.id_libro = libro.id_libro;
    this.nombre_modificar = libro.nombre;
    this.autor_modificar = libro.autor;
    this.genero_modificar = libro.genero;

    document.body.style.overflow = 'auto';

  }
  showDialog2(){
    this.visible2 = true;

    document.body.style.overflow = 'auto';
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


  modificarLibro(libro : {nombre: string, autor: string, genero: string}){
    
    if (!this.selectedFile2) {
      console.error('No se ha seleccionado ningún archivo para modificar');
      return;
    }
    
    
    let libro_string = JSON.stringify(libro);
    const file = this.fileInput2.nativeElement.files[0];
    console.log(file);
    this.libroService.updateLibro(libro_string, this.selectedFile2, this.id_libro).subscribe((response) => {
      console.log(response);
      this.visible = false;
      this.getLibros();
    });
  }
}
