import { api } from "../../lib/axios";
import { BodegasResponse } from "../../types/Bodegas/BodegaResponse";

export const getBodegas = async (): Promise<BodegasResponse> => {
  const response = await api.get("/bodegas");
  return response.data;
};
