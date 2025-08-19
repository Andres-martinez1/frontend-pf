import { api } from "../../lib/axios";

export interface ElementoPutData {
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

export async function updateElemento(id: number, data: ElementoPutData) {
  const response = await api.put(`/elementos/${id}`, data);
  return response.data;
}
