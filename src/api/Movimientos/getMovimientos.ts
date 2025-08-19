import { api } from "../../lib/axios";
import { GetMovimiento } from "../../types/Movimientos/GetMovimiento";

export const getMovimientos = async (): Promise<GetMovimiento[]> => {
  const response = await api.get("/movimientos");
  return response.data.data;
};
