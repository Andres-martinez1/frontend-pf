export type Area = {
  idArea: number;
  nombreArea: string;
  fkIdSedes: {
    idSedes: number;
    nombreSede: string;
  };
  usuarios?: {
    idUsuario: number;
    nombres: string;
    apellidos: string;
  }[];
};
