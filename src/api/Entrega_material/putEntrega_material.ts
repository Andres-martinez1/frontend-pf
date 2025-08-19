import { api } from "../../lib/axios";

export interface EntregaMaterialPutData {
  fechaEntrega: Date;
  idSolicitud: number;
  idUsuarioResponsable: number;
}

export async function updateEntregaMaterial(id: number, data: EntregaMaterialPutData) {
  const response = await api.put(`/entrega_material/${id}`, data);
  return response.data;
}
