import { api } from "../../lib/axios";

export async function deleteArea(id: number) {
  const response = await api.delete(`/areas/${id}`);
  return response.data;
}
