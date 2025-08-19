import { api } from "../../lib/axios";

export interface MunicipioPutData {
  nombreMunicipio: string;
}

export async function updateMunicipio(id: number, data: MunicipioPutData) {
  const response = await api.put(`/municipio/${id}`, data);
  return response.data;
}
