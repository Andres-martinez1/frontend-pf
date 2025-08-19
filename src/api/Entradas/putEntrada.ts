import { api } from "../../lib/axios";

export interface EntradaPutData {
  cantidadIngresada: number;
  fechaIngreso: Date;
  proveedor: string;
  fkIdBodega: number;
  fkIdElemento: number;
}

export async function updateEntrada(id: number, data: EntradaPutData) {
  const response = await api.put(`/entrada/${id}`, data);
  return response.data;
}
