import { api } from "../../lib/axios";
import { ProgramasResponse } from "../../types/Programas/ProgramaResponse";

export const getProgramas = async (): Promise<ProgramasResponse> => {
  const response = await api.get("/programas");
  return response.data;
};
