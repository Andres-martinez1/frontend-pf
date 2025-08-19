import { api } from "../../lib/axios";

export interface FichaPostData {
  numeroFicha: string;
  fkIdMunicipio: number;
  fkIdPrograma: number;
  fkIdSede: number;
}

export async function postFicha(data: FichaPostData) {
  const response = await api.post("/ficha", data);
  return response.data;
}
