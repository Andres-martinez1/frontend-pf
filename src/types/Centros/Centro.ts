export type Centro = {
  sede: any;
  municipio: ReactNode;
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
