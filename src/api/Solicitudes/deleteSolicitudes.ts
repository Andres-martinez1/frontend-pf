import { api } from "../../lib/axios";

export async function deleteSolicitud(id: number) {
  const response = await api.delete(`/solicitudes/${id}`);
  return response.data;
}
