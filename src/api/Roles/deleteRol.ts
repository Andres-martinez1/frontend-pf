import { api } from "../../lib/axios";

export const deleteRol = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/roles/${id}`);
  return response.data;
};
