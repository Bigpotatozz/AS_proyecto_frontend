import { ElementRef, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { LibroRequest, LibroResponse } from '../../interface/libro/libro.interface';
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }


  obtenerLibros(){
    const url = 'http://localhost:8081/api/libros/obtenerLibros';

    let response = this.http.get<LibroResponse[]>(url).pipe(
      catchError((error) => {
        console.log(error)
        throw error;
      })
    )

    return response
  }


  createLibro(libro: string, archivo: File){

    const formData = new FormData();
    formData.append('data', libro);
    formData.append('libro', archivo);

    const url = 'http://localhost:8081/api/libros/registrarLibro';
    let response = this.http.post<any>(url, formData).pipe(
      catchError((error) => {
        console.log(error)
        throw error;
      })
    )

    return response;
  }

  updateLibro(libro: string, archivo: File, id: number){
      
    const formData = new FormData();
    formData.append('data', libro);
    formData.append('libro', archivo);


    const url = `http://localhost:8081/api/libros/modificarLibro/${id}`;
    let response = this.http.put<any>(url, formData).pipe(
      catchError((error) => {
        console.log(error)
        throw error;
      })
    )

    return response;
  }
}
