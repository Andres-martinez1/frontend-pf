import { api } from "../../lib/axios";

export async function deleteFicha(id: number) {
  const response = await api.delete(`/ficha/${id}`);
  return response.data;
}
