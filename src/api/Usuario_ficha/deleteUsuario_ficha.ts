import { api } from "../../lib/axios";

export async function deleteUsuarioFicha(id: number) {
  const response = await api.delete(`/usuario_ficha/${id}`);
  return response.data;
}
