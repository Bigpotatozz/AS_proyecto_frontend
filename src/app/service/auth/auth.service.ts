import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AuthResponse } from '../../interface/auth/auth_response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
    
  }
  url: string = 'http://localhost:8081/api/auth/login';

  login(correo: string, contrasenia: string): Observable<any>{
    let response = this.http.post(this.url, {correo, contrasenia}).pipe(
      catchError((error) => {
        console.log(error)
        throw error;
      })
    );

    return response;

  }


}
