export type Sede = {
  idSedes: number;
  nombreSede: string;
  fkIdCentro: { idCentro: number; nombreCentro: string };
  areas?: { idArea: number; nombreArea: string }[];
  bodegases?: { idBodega: number; nombreBodega: string }[];
  fichas?: { idFicha: number; nombreFicha: string }[];
};
