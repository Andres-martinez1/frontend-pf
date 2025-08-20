import { api } from "../../lib/axios";
import { Rol } from "../../types/Roles/Rol";

export const getRolById = async (id: number): Promise<Rol> => {
  const response = await api.get(`/roles/${id}`);
  return response.data.data;
};
