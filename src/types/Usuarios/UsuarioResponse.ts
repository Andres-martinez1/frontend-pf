import { Usuario } from "./Usuario";

export type UsuarioResponse = {
  message: string;
  data: Usuario;
};

export type UsuariosResponse = Usuario[];
