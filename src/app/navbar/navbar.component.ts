import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(user => {
      this.userRole = user?.role || null;
    });
  }


  getRol(){
    const rol  = localStorage.getItem('rol');

    alert(rol);
    return rol  
  }

}
