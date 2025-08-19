import { api } from "../../lib/axios";

export interface RolPostData {
  nombreRol: string;
}

export async function postRol(data: RolPostData) {
  const response = await api.post("/roles", data);
  return response.data;
}
