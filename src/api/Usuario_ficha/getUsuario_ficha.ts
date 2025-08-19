import { api } from "../../lib/axios";
import { GetUsuarioFicha } from "../../types/Usuario_ficha/GetUsuario_ficha";

export const getUsuarioFicha = async (): Promise<GetUsuarioFicha[]> => {
  const response = await api.get("/usuario_ficha");
  return response.data;
};
