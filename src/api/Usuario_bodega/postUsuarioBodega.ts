import { api } from "../../lib/axios";
import { UsuarioBodegaPostData } from "../../types/Usuario_bodega/UsuarioBodegaPost";
import { UsuarioBodegaResponse } from "../../types/Usuario_bodega/UsuarioBodegaResponse";

export const postUsuarioBodega = async (data: UsuarioBodegaPostData): Promise<UsuarioBodegaResponse> => {
  const response = await api.post("/usuario_bodega", data);
  return response.data;
};
