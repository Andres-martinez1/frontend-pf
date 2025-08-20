import { api } from "../../lib/axios";
import { UsuarioBodega } from "../../types/Usuario_bodega/UsuarioBodega";

export const getUsuarioBodegaById = async (id: number): Promise<UsuarioBodega> => {
  const response = await api.get(`/usuario_bodega/${id}`);
  return response.data.data;
};
