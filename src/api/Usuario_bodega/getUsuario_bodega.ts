import { api } from "../../lib/axios";
import { GetUsuarioBodega } from "../../types/Usuario_bodega/GetUsuario_bodega";

export const getUsuarioBodega = async (): Promise<GetUsuarioBodega[]> => {
  const response = await api.get("/usuario_bodega");
  return response.data;
};
