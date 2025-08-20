import { api } from "../../lib/axios";

export const deleteBodega = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/bodegas/${id}`);
  return response.data;
};
