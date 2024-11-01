import { Component, Inject, OnInit, Output } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  rol: string | null = null;

  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit(): void {
    const localStorage = this.document.defaultView?.localStorage;
    if(localStorage){
      this.rol = localStorage.getItem('rol');
      alert(this.rol);
      }
  }

  



}
