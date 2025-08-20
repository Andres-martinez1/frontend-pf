import { api } from "../../lib/axios";
import { AreaPutData } from "../../types/Areas/AreaPut";
import { AreaResponse } from "../../types/Areas/AreaResponse";

export const updateArea = async (
  id: number,
  data: AreaPutData
): Promise<AreaResponse> => {
  const response = await api.put(`/areas/${id}`, data);
  return response.data;
};
