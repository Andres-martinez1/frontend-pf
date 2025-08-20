import { api } from "../../lib/axios";

export const deletePrograma = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/programas/${id}`);
  return response.data;
};
