import { api } from "../../lib/axios";
import { GetArea } from "../../types/Areas/GetArea";

export const getAreas = async (): Promise<GetArea[]> => {
  const response = await api.get("/areas");
  return response.data.data;
};
