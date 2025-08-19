import { api } from "../../lib/axios";

export interface SedePutData {
  nombreSede: string;
  fkIdCentro: number;
}

export async function updateSede(id: number, data: SedePutData) {
  const response = await api.put(`/sedes/${id}`, data);
  return response.data;
}
