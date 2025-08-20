import { api } from "../../lib/axios";
import { UsuarioFichaPostData } from "../../types/Usuario_ficha/UsuarioFichaPost";
import { UsuarioFichaResponse } from "../../types/Usuario_ficha/UsuarioFichaResponse";

export const postUsuarioFicha = async (data: UsuarioFichaPostData): Promise<UsuarioFichaResponse> => {
  const response = await api.post("/usuario_ficha", data);
  return response.data;
};
