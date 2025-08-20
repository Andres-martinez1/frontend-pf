import { api } from "../../lib/axios";
import { ProgramaPutData } from "../../types/Programas/ProgramaPut";
import { ProgramaResponse } from "../../types/Programas/ProgramaResponse";

export const updatePrograma = async (id: number, data: ProgramaPutData): Promise<ProgramaResponse> => {
  const response = await api.put(`/programas/${id}`, data);
  return response.data;
};
