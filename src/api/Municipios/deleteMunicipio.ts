import { api } from "../../lib/axios";

export const deleteMunicipio = async (id: number): Promise<{ message: string }> => {
  const response = await api.delete(`/municipios/${id}`);
  return response.data;
};
