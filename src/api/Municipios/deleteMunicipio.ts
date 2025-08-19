import { api } from "../../lib/axios";

export async function deleteMunicipio(id: number) {
  const response = await api.delete(`/municipio/${id}`);
  return response.data;
}
