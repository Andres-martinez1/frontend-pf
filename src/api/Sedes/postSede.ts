import { api } from "../../lib/axios";
import { SedePostData } from "../../types/Sedes/SedePost";
import { SedeResponse } from "../../types/Sedes/SedeResponse";

export const postSede = async (data: SedePostData): Promise<SedeResponse> => {
  const response = await api.post("/sedes", data);
  return response.data;
};
