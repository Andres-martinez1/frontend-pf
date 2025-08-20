import { api } from "../../lib/axios";
import { BodegaElementoResponse } from "../../types/bodegaElemento/BodegaElementoResponse";

export async function getBodegaElementoById(id: number): Promise<BodegaElementoResponse> {
  const response = await api.get(`/bodega-elemento/${id}`);
  return response.data;
}
