import { api } from "../../lib/axios";

export interface SalidaPostData {
  cantidadEntregada: number;
  areaDestino: number;
  fechaSalida: Date;
  fkIdBodega: number;
  fkIdElemento: number;
}

export async function postSalida(data: SalidaPostData) {
  const response = await api.post("/salidas", data);
  return response.data;
}
