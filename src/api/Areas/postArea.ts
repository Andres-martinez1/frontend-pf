import { api } from "../../lib/axios";

export interface AreaPostData {
  nombreArea: string;
}

export async function postArea(data: AreaPostData) {
  const response = await api.post("/areas", data);
  return response.data;
}
