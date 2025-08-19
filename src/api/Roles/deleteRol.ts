import { api } from "../../lib/axios";

export async function deleteRol(id: number) {
  const response = await api.delete(`/roles/${id}`);
  return response.data;
}
