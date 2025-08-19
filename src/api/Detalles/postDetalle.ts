import { api } from "../../lib/axios";

export interface DetallesPostData {
  movimiento: string;
  asignado: string;
  estado: string;
  retorno: string;
  fecha: Date;
  fkIdElemento: number;
  fkIdFicha: number;
  idSolicitud: number;
}

export async function postDetalles(data: DetallesPostData) {
  const response = await api.post("/detalles", data);
  return response.data;
}
