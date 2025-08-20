import { api } from "../../lib/axios";

export const deleteCentro = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/centros/${id}`);
  return response.data;
};
