import { api } from "../../lib/axios";
import { ProgramaPostData } from "../../types/Programas/ProgramaPost";
import { ProgramaResponse } from "../../types/Programas/ProgramaResponse";

export const postPrograma = async (data: ProgramaPostData): Promise<ProgramaResponse> => {
  const response = await api.post("/programas", data);
  return response.data;
};
