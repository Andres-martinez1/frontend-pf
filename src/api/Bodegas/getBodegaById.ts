import { api } from "../../lib/axios";
import { Bodega } from "../../types/Bodegas/Bodega";

export const getBodegaById = async (id: number): Promise<Bodega> => {
  const response = await api.get(`/bodegas/${id}`);
  return response.data;
};
