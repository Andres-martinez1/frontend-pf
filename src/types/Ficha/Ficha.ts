export type Ficha = {
  idFicha: number;
  numeroFicha: string;
  fkIdMunicipio: {
    idMunicipio: number;
    nombreMunicipio: string;
  };
  fkIdPrograma: {
    idPrograma: number;
    nombrePrograma: string;
  };
  fkIdSede: {
    idSedes: number;
    nombreSede: string;
  };
  usuarioFichas?: {
    idUsuarioFicha: number;
    nombres: string;
    apellidos: string;
  }[];
};
