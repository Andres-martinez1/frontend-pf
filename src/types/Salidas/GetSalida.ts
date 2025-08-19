export type GetSalida = {
  idSalida: number;
  cantidadEntregada: number;
  areaDestino: string | number;
  fechaSalida: Date;
  fkIdBodega: {
    idBodega: number;
    nombreBodega: string;
    encargado: string;
  };
  fkIdElemento: {
    idElemento: number;
    nombreElemento: string;
  };
};
