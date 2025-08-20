export type MovimientoPostData = {
  tipoMovimiento: string;
  cantidad: number;
  referencia?: string;
  fkIdBodegaElemento: number;
  fkIdUsuario: number;
};
