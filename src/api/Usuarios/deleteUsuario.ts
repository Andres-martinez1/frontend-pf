import { api } from "../../lib/axios";

export const deleteUsuario = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/usuarios/${id}`);
  return response.data;
};
