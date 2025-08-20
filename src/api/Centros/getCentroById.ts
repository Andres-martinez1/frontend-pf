import { api } from "../../lib/axios";
import { Centro } from "../../types/Centros/Centro";

export const getCentroById = async (id: number): Promise<Centro> => {
  const response = await api.get(`/centros/${id}`);
  return response.data;
};
