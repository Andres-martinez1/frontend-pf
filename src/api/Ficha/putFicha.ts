import { api } from "../../lib/axios";

export interface FichaPutData {
  numeroFicha: string;
  fkIdMunicipio: number;
  fkIdPrograma: number;
  fkIdSede: number;
}

export async function updateFicha(id: number, data: FichaPutData) {
  const response = await api.put(`/ficha/${id}`, data);
  return response.data;
}
