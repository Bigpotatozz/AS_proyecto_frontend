import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LibrosEdicionComponent } from './libros-edicion/libros-edicion.component';
import { LibrosComponent } from './libros/libros.component';

export const routes: Routes = [
    {path: '', component: LoginComponent,pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'libros_edicion', component: LibrosEdicionComponent},
    {path: 'libros', component: LibrosComponent}
];
