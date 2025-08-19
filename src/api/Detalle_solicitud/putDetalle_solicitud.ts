import { api } from "../../lib/axios";

export interface DetallesSolicitudesPutData {
  cantidadSolicitada: string;
  observaciones: string;
  idProducto: number;
  idSolicitud: number;
}

export async function updateDetallesSolicitud(id: number, data: DetallesSolicitudesPutData) {
  const response = await api.put(`/detalle_solicitud/${id}`, data);
  return response.data;
}
