import { api } from "../../lib/axios";
import { UsuarioPostData } from "../../types/Usuarios/UsuarioPost";
import { UsuarioResponse } from "../../types/Usuarios/UsuarioResponse";

export const postUsuario = async (data: UsuarioPostData): Promise<UsuarioResponse> => {
  const response = await api.post("/usuarios", data);
  return response.data;
};
