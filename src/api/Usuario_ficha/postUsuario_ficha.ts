import { api } from "../../lib/axios";

export interface UsuarioFichaPostData {
  fkIdFicha: number;
  fkIdUsuario: number;
}

export async function postUsuarioFicha(data: UsuarioFichaPostData) {
  const response = await api.post("/usuario_ficha", data);
  return response.data;
}
