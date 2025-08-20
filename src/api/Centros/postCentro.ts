import { api } from "../../lib/axios";
import { CentroPostData } from "../../types/Centros/CentroPost";
import { CentroResponse } from "../../types/Centros/CentroResponse";

export const postCentro = async (data: CentroPostData): Promise<CentroResponse> => {
  const response = await api.post("/centros", data);
  return response.data;
};
