import { api } from "../../lib/axios";
import { BodegaPut } from "../../types/Bodegas/BodegaPut";
import { BodegaResponse } from "../../types/Bodegas/BodegaResponse";

export const putBodega = async (
  id: number,
  data: BodegaPut
): Promise<BodegaResponse> => {
  const response = await api.put(`/bodegas/${id}`, data);
  return response.data;
};
