import { api } from "../../lib/axios";
import { UsuarioBodegasResponse } from "../../types/Usuario_bodega/UsuarioBodegaResponse";

export const getUsuarioBodegas = async (): Promise<UsuarioBodegasResponse> => {
  const response = await api.get("/usuario_bodega");
  return response.data.data;
};
