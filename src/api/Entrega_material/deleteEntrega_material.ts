import { api } from "../../lib/axios";

export async function deleteEntregaMaterial(id: number) {
  const response = await api.delete(`/entrega_material/${id}`);
  return response.data;
}
