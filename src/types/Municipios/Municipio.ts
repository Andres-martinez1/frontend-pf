export type Municipio = {
  idMunicipio: number;
  nombreMunicipio: string;
  centros?: { idCentro: number; nombreCentro: string }[];
  fichas?: { idFicha: number; numeroFicha: string }[];
};
