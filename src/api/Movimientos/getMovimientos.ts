import { api } from "../../lib/axios";
import { MovimientosResponse } from "../../types/Movimientos/MovimientoResponse";

export const getMovimientos = async (): Promise<MovimientosResponse> => {
  const response = await api.get("/movimientos");
  return response.data.data;
};
