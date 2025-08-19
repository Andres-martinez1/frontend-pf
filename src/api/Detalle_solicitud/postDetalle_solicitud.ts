import { api } from "../../lib/axios";

export interface DetallesSolicitudesPostData {
  cantidadSolicitada: string;
  observaciones: string;
  idProducto: number;
  idSolicitud: number;
}

export async function postDetallesSolicitud(data: DetallesSolicitudesPostData) {
  const response = await api.post("/detalle_solicitud", data);
  return response.data;
}
