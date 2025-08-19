import { api } from "../../lib/axios";

export interface RolPutData {
  nombreRol: string;
}

export async function updateRol(id: number, data: RolPutData) {
  const response = await api.put(`/roles/${id}`, data);
  return response.data;
}
