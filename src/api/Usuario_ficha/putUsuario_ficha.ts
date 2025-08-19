import { api } from "../../lib/axios";

export interface UsuarioFichaPutData {
  fkIdFicha: number;
  fkIdUsuario: number;
}

export async function updateUsuarioFicha(id: number, data: UsuarioFichaPutData) {
  const response = await api.put(`/usuario_ficha/${id}`, data);
  return response.data;
}
