import { api } from "../../lib/axios";
import { GetSolicitud } from "../../types/Solicitudes/GetSolicitudes";

export const getSolicitud = async (): Promise<GetSolicitud[]> => {
  const response = await api.get("/solicitudes");
  return response.data.data;
};
