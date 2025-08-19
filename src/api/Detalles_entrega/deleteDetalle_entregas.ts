import { api } from "../../lib/axios";

export async function deleteDetalleEntrega(id: number) {
  const response = await api.delete(`/detalles_entrega/${id}`);
  return response.data;
}
