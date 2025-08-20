import { api } from "../../lib/axios";
import { AreasResponse } from "../../types/Areas/AreaResponse";

export const getAreas = async (): Promise<AreasResponse> => {
  const response = await api.get("/areas");
  return response.data;
};
