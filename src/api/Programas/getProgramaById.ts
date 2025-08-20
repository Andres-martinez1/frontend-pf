import { api } from "../../lib/axios";
import { Programa } from "../../types/Programas/Programa";

export const getProgramaById = async (id: number): Promise<Programa> => {
  const response = await api.get(`/programas/${id}`);
  return response.data.data;
};
