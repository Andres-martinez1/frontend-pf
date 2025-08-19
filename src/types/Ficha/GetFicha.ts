export interface GetFicha {
  idFicha: number;
  numeroFicha: string;
  fkIdMunicipio: number | { idMunicipio: number; nombreMunicipio: string };
  fkIdPrograma: number | { idPrograma: number; nombrePrograma: string };
  fkIdSede: number | { idSedes: number; nombreSede: string };
}
