import { api } from "../../lib/axios";
import { GetElemento } from "../../types/Elementos/GetElemento";

export const getElementos = async (): Promise<GetElemento[]> => {
  const response = await api.get("/elementos");
  return response.data;
};
