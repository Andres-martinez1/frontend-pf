import { api } from "../../lib/axios";

export const deleteSede = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/sedes/${id}`);
  return response.data;
};
