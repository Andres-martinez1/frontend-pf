import { api } from "../../lib/axios";

export interface CentroPostData {
  nombreCentro: string;
  fkIdMunicipio: number;
}

export async function postCentro(data: CentroPostData) {
  const response = await api.post("/centros", data);
  return response.data;
}
