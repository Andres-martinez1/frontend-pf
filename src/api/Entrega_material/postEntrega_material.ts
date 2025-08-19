import { api } from "../../lib/axios";

export interface EntregaMaterialPostData {
  fechaEntrega: Date;
  idSolicitud: number;
  idUsuarioResponsable: number;
}

export async function postEntregaMaterial(data: EntregaMaterialPostData) {
  const response = await api.post("/entrega_material", data);
  return response.data;
}
