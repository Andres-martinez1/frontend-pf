export type Movimiento = {
  idMovimiento: number;
  tipoMovimiento: string | null;
  cantidad: number;
  fechaMovimiento: string | null;
  referencia: string | null;
  fkIdBodegaElemento: {
    id: number;
    nombreElemento: string;
  };
  fkIdUsuario: {
    idUsuario: number;
    nombres: string;
    apellidos: string;
  };
};
