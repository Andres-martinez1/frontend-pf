import { api } from "../../lib/axios";
import { RolPutData } from "../../types/Roles/RolPut";
import { RolResponse } from "../../types/Roles/RolResponse";

export const updateRol = async (id: number, data: RolPutData): Promise<RolResponse> => {
  const response = await api.put(`/roles/${id}`, data);
  return response.data;
};
