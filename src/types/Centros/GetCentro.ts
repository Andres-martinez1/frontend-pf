export interface GetCentro {
  idCentro: number;
  nombreCentro: string;
  fkIdMunicipio: {
    idMunicipio: number;
    nombreMunicipio: string;
  } | null;
}
