import { api } from "../../lib/axios";
import { GetEntrada } from "../../types/Entradas/GetEntrada";

export const getEntradas = async (): Promise<GetEntrada[]> => {
  const response = await api.get("/entradas");
  return response.data;
};
