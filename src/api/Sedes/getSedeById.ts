import { api } from "../../lib/axios";
import { Sede } from "../../types/Sedes/Sede";

export const getSedeById = async (id: number): Promise<Sede> => {
  const response = await api.get(`/sedes/${id}`);
  return response.data;
};
