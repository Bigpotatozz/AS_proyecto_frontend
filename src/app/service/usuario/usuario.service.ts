import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { UsuarioRequest, UsuarioResponse, UsuarioUpdate } from '../../interface/usuario/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) {}


  obtenerUsuarios(): Observable<UsuarioResponse[]>{
    const url = 'http://localhost:8081/api/usuarios/obtenerUsuarios';

    let response = this.http.get<UsuarioResponse[]>(url).pipe(
      catchError((error) => {
        console.log(error)
        throw error;
      })
    )

    return response;
  }

  updateUsuario(usuario: UsuarioUpdate): Observable<any>{
    console.log(usuario);
    const url = `http://localhost:8081/api/usuarios/actualizarUsuario/${usuario.id_usuario}`;
    let response = this.http.put<any>(url, usuario).pipe(
      catchError((error) => {
        console.log(error)
        throw error;
      })
    )

    return response;
  }
}
