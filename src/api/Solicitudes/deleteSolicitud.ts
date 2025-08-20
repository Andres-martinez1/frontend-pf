import { api } from "../../lib/axios";

export const deleteSolicitud = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/solicitudes/${id}`);
  return response.data;
};
