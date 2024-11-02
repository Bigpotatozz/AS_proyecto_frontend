import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const routes: Routes = [
    {path: '', component: LoginComponent,pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'usuarios', component: UsuariosComponent}
];
