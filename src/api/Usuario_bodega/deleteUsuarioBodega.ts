import { api } from "../../lib/axios";

export const deleteUsuarioBodega = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/usuario_bodega/${id}`);
  return response.data;
};
