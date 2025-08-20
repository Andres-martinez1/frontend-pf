import { api } from "../../lib/axios";
import { SolicitudPostData } from "../../types/Solicitudes/SolicitudPost";
import { SolicitudResponse } from "../../types/Solicitudes/SolicitudResponse";

export const postSolicitud = async (data: SolicitudPostData): Promise<SolicitudResponse> => {
  const response = await api.post("/solicitudes", data);
  return response.data;
};
