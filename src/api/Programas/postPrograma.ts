import { api } from "../../lib/axios";

export interface ProgramaPostData {
  nombrePrograma: string;
}

export async function postPrograma(data: ProgramaPostData) {
  const response = await api.post("/programas", data);
  return response.data;
}
