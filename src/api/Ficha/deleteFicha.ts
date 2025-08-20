import { api } from "../../lib/axios";

export const deleteFicha = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/fichas/${id}`);
  return response.data;
};
