import { api } from "../../lib/axios";

export async function deleteSede(id: number) {
  const response = await api.delete(`/sedes/${id}`);
  return response.data;
}
