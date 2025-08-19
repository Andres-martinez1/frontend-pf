import { api } from "../../lib/axios";

export interface SolicitudPutData {
  estadoSolicitud: string;
  fechaSolicitud: Date;
  idUsuarioSolicitante: number;
}

export async function updateSolicitud(id: number, data: SolicitudPutData) {
  const response = await api.put(`/solicitudes/${id}`, data);
  return response.data;
}
