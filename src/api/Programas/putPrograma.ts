import { api } from "../../lib/axios";

export interface ProgramaPutData {
  nombrePrograma: string;
}

export async function updatePrograma(id: number, data: ProgramaPutData) {
  const response = await api.put(`/programas/${id}`, data);
  return response.data;
}
