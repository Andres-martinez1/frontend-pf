export interface GetBodega {
  idBodega: number;
  encargado: string;
  nombreBodega: string;
  fkIdSede: {
    idSedes: number;
    nombreSede: string;
  } | null;
}
