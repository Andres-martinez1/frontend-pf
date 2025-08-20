import { api } from "../../lib/axios";
import { BodegaPost } from "../../types/Bodegas/BodegaPost";
import { BodegaResponse } from "../../types/Bodegas/BodegaResponse";

export const postBodega = async (data: BodegaPost): Promise<BodegaResponse> => {
  const response = await api.post("/bodegas", data);
  return response.data;
};
