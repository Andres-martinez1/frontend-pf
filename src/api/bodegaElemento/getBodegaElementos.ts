import { api } from "../../lib/axios";
import { BodegaElementoListResponse } from "../../types/bodegaElemento/BodegaElementoResponse";

export async function getBodegaElementos(): Promise<BodegaElementoListResponse> {
  const response = await api.get("/bodega-elemento");
  return response.data;
}
