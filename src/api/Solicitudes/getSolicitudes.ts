import { api } from "../../lib/axios";
import { SolicitudesResponse } from "../../types/Solicitudes/SolicitudResponse";

export const getSolicitudes = async (): Promise<SolicitudesResponse> => {
  const response = await api.get("/solicitudes");
  return response.data.data;
};
