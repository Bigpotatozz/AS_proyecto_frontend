
export interface UsuarioResponse {
    id_usuario: number;
    nombre: string;
    correo: string;
    contrasenia: string;
    rol: string;
    estatus: boolean;
}

export interface UsuarioRequest{
    nombre: string;
    correo: string;
    contrasenia: string;
    rol: string;
}

export interface UsuarioUpdate{

    id_usuario: number;
    nombre: string;
    correo: string;
}