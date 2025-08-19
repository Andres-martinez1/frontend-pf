export type GetElemento = {
  idElemento: number;
  nombreElemento: string;
  stock: number;
  clasificacion: string;
  fichaTecnica: string;
  uso: string;
  tipo: string;
  estado: string;
  serial: string;
  fechaCaducidad: Date;
  fechaIngreso: Date;
  fechaSalida: Date;

  fkIdBodega: {
    idBodega: number;
    nombreBodega: string;
    encargado: string;
  };

  entradas: {
    proveedor: string;
    cantidadIngresada: string;
    fechaIngreso: string;
  }[];

  salidas: {
    areaDestino: string;
    cantidadEntregada: string;
    fechaSalida: string;
  }[];
};
