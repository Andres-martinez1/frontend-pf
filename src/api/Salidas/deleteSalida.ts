import { api } from "../../lib/axios";

export async function deleteSalida(id: number) {
  const response = await api.delete(`/salidas/${id}`);
  return response.data;
}
