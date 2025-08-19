import { api } from "../../lib/axios";
import { GetDetalleSolicitud } from "../../types/Detalle_solicitud/GetDetalles._solicitud";

export const getDetalleSolicitud = async (): Promise<GetDetalleSolicitud[]> => {
  const response = await api.get("/detalle_solicitud");
  return response.data.data;
};
