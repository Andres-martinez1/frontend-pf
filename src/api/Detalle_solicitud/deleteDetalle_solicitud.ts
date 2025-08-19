import { api } from "../../lib/axios";

export async function deleteDetalleSolicitud(id: number) {
  const response = await api.delete(`/detalle_solicitud/${id}`);
  return response.data;
}
