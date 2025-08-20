import { api } from "../../lib/axios";
import { BodegaElementoPut } from "../../types/bodegaElemento/BodegaElementoPut";
import { BodegaElementoResponse } from "../../types/bodegaElemento/BodegaElementoResponse";

export async function putBodegaElemento(id: number, data: BodegaElementoPut): Promise<BodegaElementoResponse> {
  const response = await api.put(`/bodega-elemento/${id}`, data);
  return response.data;
}
