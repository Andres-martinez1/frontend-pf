import { api } from "../../lib/axios";

export interface ElementoPostData {
  nombreElemento: string;
  stock: number;
  clasificacion: string;
  fichaTecnica: string;
  uso: string;
  tipo: string;
  estado: string;
  serial: string;
  fechaCaducidad: Date;
  fechaIngreso: Date;
  fechaSalida: Date;
  fkIdBodega: number;
}

export async function postElemento(data: ElementoPostData) {
  const response = await api.post("/elementos", data);
  return response.data;
}
