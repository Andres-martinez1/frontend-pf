import { api } from "../../lib/axios";
import { GetDetalle } from "../../types/Detalles/GetDetalle";

export const getDetalle = async (): Promise<GetDetalle[]> => {
  const response = await api.get("/detalles");
  return response.data;
};
