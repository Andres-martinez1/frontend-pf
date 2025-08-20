import { Movimiento } from "./Movimiento";

export type MovimientoResponse = {
  message: string;
  movimiento: Movimiento;
};

export type MovimientosResponse = Movimiento[];
