export type Elemento = {
  idElemento: number;
  nombreElemento: string;
  clasificacion?: string | null;
  numeroDeSerie?: string | null;
  uso?: string | null;
  estado?: string | null;
  tipo?: string | null;
  marca?: string | null;
  img?: string | null;
  unidadDeMedida?: string | null;
  descripcion?: string | null;
  fechaVencimiento?: string | null;
  bodegaElementos?: {
    idBodegaElemento: number;
    cantidad: number;
    fkIdBodega: {
      idBodega: number;
      nombreBodega: string;
    };
  }[];
};
