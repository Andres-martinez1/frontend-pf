import { Bodega } from "./Bodega";

export type BodegaResponse = {
  message: string;
  bodega: Bodega;
};

export type BodegasResponse = Bodega[];
