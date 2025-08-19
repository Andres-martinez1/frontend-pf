import { api } from "../../lib/axios";
import { GetTrazabilidad } from "../../types/Trazabilidad/GetTrazabilidad";

export const getTrazabilidad = async (): Promise<GetTrazabilidad[]> => {
  const response = await api.get("/trazabilidad");
  return response.data;
};
