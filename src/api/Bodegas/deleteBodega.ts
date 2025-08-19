import { api } from "../../lib/axios";

export async function deleteBodega(id: number) {
  const response = await api.delete(`/bodegas/${id}`);
  return response.data;
}
