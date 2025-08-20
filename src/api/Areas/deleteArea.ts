import { api } from "../../lib/axios";

export const deleteArea = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/areas/${id}`);
  return response.data;
};
