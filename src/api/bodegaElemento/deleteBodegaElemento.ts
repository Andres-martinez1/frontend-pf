import { api } from "../../lib/axios";
import { DeleteResponse } from "../../types/bodegaElemento/BodegaElementoResponse";

export async function deleteBodegaElemento(id: number): Promise<DeleteResponse> {
  const response = await api.delete(`/bodega-elemento/${id}`);
  return response.data;
}
