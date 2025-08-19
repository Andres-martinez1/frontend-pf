import { api } from "../../lib/axios";

export interface SolicitudPostData {
  estadoSolicitud: string;
  fechaSolicitud: Date;
  idUsuarioSolicitante: number;
}

export async function postSolicitud(data: SolicitudPostData) {
  const response = await api.post("/solicitudes", data);
  return response.data;
}
