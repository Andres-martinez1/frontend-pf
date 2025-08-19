import { api } from "../../lib/axios";
import { GetSede } from "../../types/Sedes/GetSede";

export const getSede = async (): Promise<GetSede[]> => {
  const response = await api.get("/sedes");
  return response.data.data;
};
