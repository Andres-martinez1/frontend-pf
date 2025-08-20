import { api } from "../../lib/axios";
import { SolicitudPutData } from "../../types/Solicitudes/SolicitudPut";
import { SolicitudResponse } from "../../types/Solicitudes/SolicitudResponse";

export const updateSolicitud = async (id: number, data: SolicitudPutData): Promise<SolicitudResponse> => {
  const response = await api.put(`/solicitudes/${id}`, data);
  return response.data;
};
