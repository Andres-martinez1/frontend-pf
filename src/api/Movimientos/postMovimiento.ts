import { api } from "../../lib/axios";
import { MovimientoPostData } from "../../types/Movimientos/MovimientoPost";
import { MovimientoResponse } from "../../types/Movimientos/MovimientoResponse";

export const postMovimiento = async (data: MovimientoPostData): Promise<MovimientoResponse> => {
  const response = await api.post("/movimientos", data);
  return response.data.data;
};
