import { api } from "../../lib/axios";
import { ElementosResponse } from "../../types/Elementos/ElementoResponse";

export const getElementos = async (): Promise<ElementosResponse> => {
  const response = await api.get("/elementos");
  return response.data;
};
