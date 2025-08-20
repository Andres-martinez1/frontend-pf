import { api } from "../../lib/axios";
import { RolesResponse } from "../../types/Roles/RolResponse";

export const getRoles = async (): Promise<RolesResponse> => {
  const response = await api.get("/roles");
  return response.data.data;
};
