import { api } from "../../lib/axios";

export async function deleteTrazabilidad(id: number) {
  const response = await api.delete(`/trazabilidad/${id}`);
  return response.data;
}
