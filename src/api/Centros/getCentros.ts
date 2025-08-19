import { api } from "../../lib/axios";
import { GetCentro } from "../../types/Centros/GetCentro";

export const getCentro = async (): Promise<GetCentro[]> => {
  const response = await api.get("/centros");
  return response.data.data;
};
