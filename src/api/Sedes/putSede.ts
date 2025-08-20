import { api } from "../../lib/axios";
import { SedePutData } from "../../types/Sedes/SedePut";
import { SedeResponse } from "../../types/Sedes/SedeResponse";

export const updateSede = async (id: number, data: SedePutData): Promise<SedeResponse> => {
  const response = await api.put(`/sedes/${id}`, data);
  return response.data;
};
