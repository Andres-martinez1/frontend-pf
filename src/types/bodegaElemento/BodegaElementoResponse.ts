import { BodegaElemento } from "./BodegaElemento";

export interface BodegaElementoResponse {
  message: string;
  data: BodegaElemento;
}

export interface BodegaElementoListResponse {
  message: string;
  data: BodegaElemento[];
}

export interface DeleteResponse {
  message: string;
}
