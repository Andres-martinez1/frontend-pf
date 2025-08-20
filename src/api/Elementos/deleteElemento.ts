import { api } from "../../lib/axios";

export const deleteElemento = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/elementos/${id}`);
  return response.data;
};
