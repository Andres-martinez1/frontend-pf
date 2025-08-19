import { api } from "../../lib/axios";

export async function deletePrograma(id: number) {
  const response = await api.delete(`/programas/${id}`);
  return response.data;
}
