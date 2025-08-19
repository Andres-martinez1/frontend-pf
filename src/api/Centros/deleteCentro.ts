import { api } from "../../lib/axios";

export async function deleteCentro(id: number) {
  const response = await api.delete(`/centros/${id}`);
  return response.data;
}
