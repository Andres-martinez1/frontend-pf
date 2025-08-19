import { api } from "../../lib/axios";

export interface MovimientoPutData {
  fecha: Date;
  responsable: string;
  pedir: string;
  suministrar: string;
  devolver: string;
  fkIdElemento: number;
  fkIdUsuario: number;
}

export async function updateMovimiento(id: number, data: MovimientoPutData) {
  const response = await api.put(`/movimientos/${id}`, data);
  return response.data;
}
