import { api } from "../../lib/axios";

export async function deleteElemento(id: number) {
  const response = await api.delete(`/elementos/${id}`);
  return response.data;
}
