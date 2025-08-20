import { api } from "../../lib/axios";
import { RolPostData } from "../../types/Roles/RolPost";
import { RolResponse } from "../../types/Roles/RolResponse";

export const postRol = async (data: RolPostData): Promise<RolResponse> => {
  const response = await api.post("/roles", data);
  return response.data;
};
