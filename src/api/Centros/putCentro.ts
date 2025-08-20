import { api } from "../../lib/axios";
import { CentroPutData } from "../../types/Centros/CentroPut";
import { CentroResponse } from "../../types/Centros/CentroResponse";

export const updateCentro = async (
  id: number,
  data: CentroPutData
): Promise<CentroResponse> => {
  const response = await api.put(`/centros/${id}`, data);
  return response.data;
};
