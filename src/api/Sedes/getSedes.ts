import { api } from "../../lib/axios";
import { SedesResponse } from "../../types/Sedes/SedeResponse";

export const getSedes = async (): Promise<SedesResponse> => {
  const response = await api.get("/sedes");
  return response.data;
};
