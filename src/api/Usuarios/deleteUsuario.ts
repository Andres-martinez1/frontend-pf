import { api } from "../../lib/axios";

export async function deleteUsuarios(id: number) {
  const response = await api.delete(`/usuarios/${id}`);
  return response.data;
}
