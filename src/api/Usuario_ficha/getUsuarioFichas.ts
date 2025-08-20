import { api } from "../../lib/axios";
import { UsuarioFichasResponse } from "../../types/Usuario_ficha/UsuarioFichaResponse";

export const getUsuarioFichas = async (): Promise<UsuarioFichasResponse> => {
  const response = await api.get("/usuario_ficha");
  return response.data.data;
};
