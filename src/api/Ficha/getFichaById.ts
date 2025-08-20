import { api } from "../../lib/axios";
import { Ficha } from "../../types/Ficha/Ficha";

export const getFichaById = async (id: number): Promise<Ficha> => {
  const response = await api.get(`/fichas/${id}`);
  return response.data.data;
};
