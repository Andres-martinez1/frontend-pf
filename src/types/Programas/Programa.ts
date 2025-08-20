export type Programa = {
  idPrograma: number;
  nombrePrograma: string;
  fichas?: { idFicha: number; numeroFicha: string }[];
};
