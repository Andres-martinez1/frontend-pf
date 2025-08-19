import { api } from "../../lib/axios";

export async function deleteDetalle(id: number) {
  const response = await api.delete(`/detalles/${id}`);
  return response.data;
}
