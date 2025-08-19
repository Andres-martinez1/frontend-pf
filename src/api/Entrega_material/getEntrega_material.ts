import { api } from "../../lib/axios";
import { GetEntregaMaterial } from "../../types/Entrega_material/GetEntrega_material";

export const getEntregaMaterial = async (): Promise<GetEntregaMaterial[]> => {
  const response = await api.get("/entrega_material");
  return response.data.data;
};
