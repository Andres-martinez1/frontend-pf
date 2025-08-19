import { api } from "../../lib/axios";

export interface BodegaPutData {
    encargado: string;       
    nombreBodega: string;             
    fkIdSede: number; 
}

export async function updateBodega(id: number, data: BodegaPutData) {
  const response = await api.put(`/bodegas/${id}`, data);
  return response.data;
}
