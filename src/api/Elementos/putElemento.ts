import { api } from "../../lib/axios";
import { ElementoPutData } from "../../types/Elementos/ElementoPut";
import { ElementoResponse } from "../../types/Elementos/ElementoResponse";

export const updateElemento = async (
  id: number,
  data: ElementoPutData
): Promise<ElementoResponse> => {
  const response = await api.put(`/elementos/${id}`, data);
  return response.data;
};
