import { api } from "../../lib/axios";

export interface UsuarioBodegaPutData {
  fkIdBodega: number;
  fkIdUsuario: number;
}

export async function updateUsuarioBodega(id: number, data: UsuarioBodegaPutData) {
  const response = await api.put(`/usuario_bodega/${id}`, data);
  return response.data;
}
