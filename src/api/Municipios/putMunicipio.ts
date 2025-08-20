import { api } from "../../lib/axios";
import { MunicipioPutData } from "../../types/Municipios/MunicipioPut";
import { MunicipioResponse } from "../../types/Municipios/MunicipioResponse";

export const updateMunicipio = async (id: number, data: MunicipioPutData): Promise<MunicipioResponse> => {
  const response = await api.put(`/municipios/${id}`, data);
  return response.data;
};
