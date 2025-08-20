import { api } from "../../lib/axios";
import { UsuariosResponse } from "../../types/Usuarios/UsuarioResponse";

export const getUsuarios = async (): Promise<UsuariosResponse> => {
  const response = await api.get("/usuarios");
  return response.data.data;
};
