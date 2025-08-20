import { api } from "../../lib/axios";
import { MunicipioPostData } from "../../types/Municipios/MunicipioPost";
import { MunicipioResponse } from "../../types/Municipios/MunicipioResponse";

export const postMunicipio = async (data: MunicipioPostData): Promise<MunicipioResponse> => {
  const response = await api.post("/municipios", data);
  return response.data;
};
