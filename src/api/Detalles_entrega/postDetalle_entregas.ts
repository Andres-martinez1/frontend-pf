import { api } from "../../lib/axios";

export interface DetallesEntregaPostData {
  vistoBuenoAprendiz: boolean;
  idEntrega: number;
  idFichaFormacion: number;
  idInstructorReceptor: number;
}

export async function postDetallesEntrega(data: DetallesEntregaPostData) {
  const response = await api.post("/detalles_entrega", data);
  return response.data;
}
