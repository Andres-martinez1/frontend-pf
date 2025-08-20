import { api } from "../../lib/axios";
import { BodegaElementoPost } from "../../types/bodegaElemento/BodegaElementoPost";
import { BodegaElementoResponse } from "../../types/bodegaElemento/BodegaElementoResponse";

export async function postBodegaElemento(data: BodegaElementoPost): Promise<BodegaElementoResponse> {
  const response = await api.post("/bodega-elemento", data);
  return response.data;
}
