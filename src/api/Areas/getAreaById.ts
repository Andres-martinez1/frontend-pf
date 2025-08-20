import { api } from "../../lib/axios";
import { Area } from "../../types/Areas/Area";

export const getAreaById = async (id: number): Promise<Area> => {
  const response = await api.get(`/areas/${id}`);
  return response.data;
};
