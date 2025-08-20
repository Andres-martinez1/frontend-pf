import { api } from "../../lib/axios";

export const deleteMovimiento = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/movimientos/${id}`);
  return response.data;
};
