import { api } from "../../lib/axios";
import { AreaPostData } from "../../types/Areas/AreaPost";
import { AreaResponse } from "../../types/Areas/AreaResponse";

export const postArea = async (data: AreaPostData): Promise<AreaResponse> => {
  const response = await api.post("/areas", data);
  return response.data;
};
