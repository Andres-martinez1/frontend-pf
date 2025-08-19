import { api } from "../../lib/axios";

export interface TrazabilidadPutData {
  tipoMovimiento: string;
  fecha: Date;
  estadoActual: string;
  bodegaOrigen: string;
  bodegaDestino: string;
  fkIdElemento: number;
}

export async function updateTrazabilidad(id: number, data: TrazabilidadPutData) {
  const response = await api.put(`/trazabilidad/${id}`, data);
  return response.data;
}
