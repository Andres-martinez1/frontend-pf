import { api } from "../../lib/axios";
import { FichaPutData } from "../../types/Ficha/FichaPut";
import { FichaResponse } from "../../types/Ficha/FichaResponse";

export const updateFicha = async (id: number, data: FichaPutData): Promise<FichaResponse> => {
  const response = await api.put(`/fichas/${id}`, data);
  return response.data.data;
};
