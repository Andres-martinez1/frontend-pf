import { api } from "../../lib/axios";

export interface DetallesEntregaPutData {
  vistoBuenoAprendiz: boolean;
  idEntrega: number;
  idFichaFormacion: number;
  idInstructorReceptor: number;
}

export async function updateDetallesEntrega(id: number, data: DetallesEntregaPutData) {
  const response = await api.put(`/detalles_entrega/${id}`, data);
  return response.data;
}
