import { api } from "../../lib/axios";
import { UsuarioBodegaPutData } from "../../types/Usuario_bodega/UsuarioBodegaPut";
import { UsuarioBodegaResponse } from "../../types/Usuario_bodega/UsuarioBodegaResponse";

export const updateUsuarioBodega = async (id: number, data: UsuarioBodegaPutData): Promise<UsuarioBodegaResponse> => {
  const response = await api.put(`/usuario_bodega/${id}`, data);
  return response.data;
};
