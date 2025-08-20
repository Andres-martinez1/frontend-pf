import { api } from "../../lib/axios";
import { Municipio } from "../../types/Municipios/Municipio";

export const getMunicipioById = async (id: number): Promise<Municipio> => {
  const response = await api.get(`/municipios/${id}`);
  return response.data.data;
};
