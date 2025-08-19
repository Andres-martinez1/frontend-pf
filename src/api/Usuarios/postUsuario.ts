import { api } from "../../lib/axios";

export interface UsuarioPostData {
  nombres: string;
  apellidos: string;
  correo: string;
  password: string;
  fkIdArea: number | null;
  fkIdRol: number | null;
}

export async function postUsuario(data: UsuarioPostData) {
  const response = await api.post("/usuarios", data);
  return response.data;
}
