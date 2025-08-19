import { api } from "../../lib/axios";

export interface MovimientoPostData {
  fecha: Date;
  responsable: string;
  pedir: string;
  suministrar: string;
  devolver: string;
  fkIdElemento: number;
  fkIdUsuario: number;
}

export async function postMovimiento(data: MovimientoPostData) {
  const response = await api.post("/movimientos", data);
  return response.data;
}
