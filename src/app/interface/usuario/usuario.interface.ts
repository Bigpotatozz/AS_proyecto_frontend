
export interface UsuarioResponse {
    id_usuario: number;
    nombre: string;
    correo: string;
    contrasenia: string;
    rol: string;
    estatus: boolean;
}

export interface UsuarioRequest{
    id_usuario: number;
    nombre: string;
    correo: string;
}

export interface UsuarioUpdate{

    id_usuario: number;
    nombre: string;
    correo: string;
}