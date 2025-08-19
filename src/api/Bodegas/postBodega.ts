import { api } from "../../lib/axios";

export interface BodegaPostData {
    encargado: string;       
    nombreBodega: string;             
    fkIdSede: number; 
}

export async function postBodega(data: BodegaPostData) {
  const response = await api.post("/bodegas", data);
  return response.data;
}
