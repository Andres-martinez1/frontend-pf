import { api } from "../../lib/axios";

export interface MunicipioPostData {
  nombreMunicipio: string;
}

export async function postMunicipio(data: MunicipioPostData) {
  const response = await api.post("/municipio", data);
  return response.data;
}
