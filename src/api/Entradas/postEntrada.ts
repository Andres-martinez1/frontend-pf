import { api } from "../../lib/axios";

export interface EntradaPostData {
  cantidadIngresada: number;
  fechaIngreso: Date;
  proveedor: string;
  fkIdBodega: number;
  fkIdElemento: number;
}

export async function postEntrada(data: EntradaPostData) {
  const response = await api.post("/entradas", data);
  return response.data;
}
