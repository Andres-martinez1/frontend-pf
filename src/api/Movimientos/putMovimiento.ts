import { api } from "../../lib/axios";
import { MovimientoPutData } from "../../types/Movimientos/MovimientoPut";
import { MovimientoResponse } from "../../types/Movimientos/MovimientoResponse";

export const updateMovimiento = async (id: number, data: MovimientoPutData): Promise<MovimientoResponse> => {
  const response = await api.put(`/movimientos/${id}`, data);
  return response.data.data;
};
