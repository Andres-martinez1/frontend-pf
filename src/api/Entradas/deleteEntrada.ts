import { api } from "../../lib/axios";

export async function deleteEntrada(id: number) {
  const response = await api.delete(`/entradas/${id}`);
  return response.data;
}
