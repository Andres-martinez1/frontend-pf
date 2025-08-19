import { api } from "../../lib/axios";

export interface UsuarioBodegaPostData {
  fkIdBodega: number;
  fkIdUsuario: number;
}

export async function postUsuarioBodega(data: UsuarioBodegaPostData) {
  const response = await api.post("/usuario_bodega", data);
  return response.data;
}
