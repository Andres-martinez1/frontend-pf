export type Centro = {
  idCentro: number;
  nombreCentro: string;
  fkIdMunicipio: {
    idMunicipio: number;
    nombreMunicipio: string;
  };
  sedes?: {
    idSede: number;
    nombreSede: string;
  }[];
};
