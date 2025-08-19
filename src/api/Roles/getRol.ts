import { api } from "../../lib/axios";
import { GetRol } from "../../types/Roles/GetRoles";

export const getRoles = async (): Promise<GetRol[]> => {
  const response = await api.get("/roles");
  return response.data.data;
};
