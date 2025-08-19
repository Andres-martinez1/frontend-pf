import { api } from "../../lib/axios";

export interface UsuarioPutData {

  nombres: string;
  apellidos: string;
  correo: string;
  password: string;
  fkIdArea: number | null;
  fkIdRol: number | null;
}

export async function updateUsuario(id: number, data: UsuarioPutData) {
  const response = await api.put(`/usuarios/${id}`, data);
  return response.data;
}
