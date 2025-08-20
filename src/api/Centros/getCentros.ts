import { api } from "../../lib/axios";
import { CentrosResponse } from "../../types/Centros/CentroResponse";

export const getCentros = async (): Promise<CentrosResponse> => {
  const response = await api.get("/centros");
  return response.data;
};
