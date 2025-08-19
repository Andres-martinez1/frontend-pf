import { api } from "../../lib/axios";

export interface SalidaPutData {
  cantidadEntregada: number;
  areaDestino: number;
  fechaSalida: Date;
  fkIdBodega: number;
  fkIdElemento: number;
}

export async function updateSalida(id: number, data: SalidaPutData) {
  const response = await api.put(`/salidas/${id}`, data);
  return response.data;
}
