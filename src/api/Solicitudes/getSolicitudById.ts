import { api } from "../../lib/axios";
import { Solicitud } from "../../types/Solicitudes/Solicitud";

export const getSolicitudById = async (id: number): Promise<Solicitud> => {
  const response = await api.get(`/solicitudes/${id}`);
  return response.data.data;
};
