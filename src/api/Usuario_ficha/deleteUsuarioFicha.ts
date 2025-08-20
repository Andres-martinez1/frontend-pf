import { api } from "../../lib/axios";

export const deleteUsuarioFicha = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/usuario_ficha/${id}`);
  return response.data;
};
