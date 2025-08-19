import { api } from "../../lib/axios";

export interface TrazabilidadPostData {
  tipoMovimiento: string;
  fecha: Date;
  estadoActual: string;
  bodegaOrigen: string;
  bodegaDestino: string;
  fkIdElemento: number;
}

export async function postTrazabilidad(data: TrazabilidadPostData) {
  const response = await api.post("/trazabilidad", data);
  return response.data;
}
