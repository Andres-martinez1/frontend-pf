import { api } from "../../lib/axios";
import { MunicipiosResponse } from "../../types/Municipios/MunicipioResponse";

export const getMunicipios = async (): Promise<MunicipiosResponse> => {
  const response = await api.get("/municipios");
  return response.data.data;
};
