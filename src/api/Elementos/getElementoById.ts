import { api } from "../../lib/axios";
import { Elemento } from "../../types/Elementos/Elemento";

export const getElementoById = async (id: number): Promise<Elemento> => {
  const response = await api.get(`/elementos/${id}`);
  return response.data;
};
