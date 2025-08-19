import { api } from "../../lib/axios";

export interface SedePostData {
  nombreSede: string;
  fkIdCentro: number;
}

export async function postSede(data: SedePostData) {
  const response = await api.post("/sedes", data);
  return response.data;
}
