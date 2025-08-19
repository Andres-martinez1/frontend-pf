import { api } from "../../lib/axios";
import { GetSalida } from "../../types/Salidas/GetSalida";

export const getSalida = async (): Promise<GetSalida[]> => {
  const response = await api.get("/salidas");
  return response.data;
};
