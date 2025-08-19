import { api } from "../../lib/axios";

export interface CentroPutData {
  nombreCentro: string;
  fkIdMunicipio: number;
}

export async function updateCentro(id: number, data: CentroPutData) {
  const response = await api.put(`/centros/${id}`, data);
  return response.data;
}
