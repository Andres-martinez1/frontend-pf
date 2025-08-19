import { api } from "../../lib/axios";
import { GetBodega } from "../../types/Bodegas/GetBodega";

export const getBodega = async (): Promise<GetBodega[]> => {
  const response = await api.get("/bodegas");
  return response.data.data;
};
