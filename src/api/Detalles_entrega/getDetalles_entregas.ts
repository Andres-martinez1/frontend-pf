import { api } from "../../lib/axios";
import { GetDetalleEntrega } from "../../types/Detalles_entrega/GetDetalles_entrega";

export const getDetalleEntrega = async (): Promise<GetDetalleEntrega[]> => {
  const response = await api.get("/detalles_entrega");
  return response.data.data;
};
