import { Bodega } from "../../types/Bodegas/Bodega";
import { Elemento } from "../../types/Elementos/Elemento";
import { Movimiento } from "../../types/Movimientos/Movimiento";

export interface BodegaElemento {
  id: number;
  stockActual: number;
  stockMinimo: number | null;
  fkIdBodega: Bodega;
  fkIdElemento: Elemento;
  movimientos?: Movimiento[];
}
