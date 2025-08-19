import { api } from "../../lib/axios";
import { GetMunicipio } from "../../types/Municipios/GetMunicipio";

export const getMunicipios = async (): Promise<GetMunicipio[]> => {
  const response = await api.get("/municipio");
  return response.data.data;
};
