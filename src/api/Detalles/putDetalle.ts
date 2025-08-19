import { api } from "../../lib/axios";

export interface DetallesPutData {
  movimiento: string;
  asignado: string;
  estado: string;
  retorno: string;
  fecha: Date;
  fkIdElemento: number;
  fkIdFicha: number;
  idSolicitud: number;
}

export async function updateDetalles(id: number, data: DetallesPutData) {
  const response = await api.put(`/detalles/${id}`, data);
  return response.data;
}
