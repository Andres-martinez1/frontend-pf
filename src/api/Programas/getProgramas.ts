import { api } from "../../lib/axios";
import { GetPrograma } from "../../types/Programas/GetPrograma";

export const getPrograma = async (): Promise<GetPrograma[]> => {
  const response = await api.get("/programas");
  return response.data.data;
};
