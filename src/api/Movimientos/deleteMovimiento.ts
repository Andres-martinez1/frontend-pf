import { api } from "../../lib/axios";

export async function deleteMovimiento(id: number) {
  const response = await api.delete(`/movimientos/${id}`);
  return response.data;
}
