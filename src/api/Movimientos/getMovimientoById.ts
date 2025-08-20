import { api } from "../../lib/axios";
import { Movimiento } from "../../types/Movimientos/Movimiento";

export const getMovimientoById = async (id: number): Promise<Movimiento> => {
  const response = await api.get(`/movimientos/${id}`);
  return response.data.data;
};
