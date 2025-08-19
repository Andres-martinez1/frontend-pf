import { api } from "../../lib/axios";

export interface AreaPutData {
  nombreArea: string;
}

export async function updateArea(id: number, data: AreaPutData) {
  const response = await api.put(`/areas/${id}`, data);
  return response.data;
}
