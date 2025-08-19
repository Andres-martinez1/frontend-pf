import { api } from "../../lib/axios";

export async function deleteUsuarioBodega(id: number) {
  const response = await api.delete(`/usuario_bodega/${id}`);
  return response.data;
}
