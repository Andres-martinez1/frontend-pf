export type GetTrazabilidad = {
  idTrazabilidad: number;
  tipoMovimiento: string;
  fecha: Date;
  estadoActual: string;
  bodegaOrigen: {
    encargado: string;
    idBodega: number;
    nombreBodega: string;
  };
  bodegaDestino: {
    encargado: string;
    idBodega: number;
    nombreBodega: string;
  };
  fkIdElemento: {
    stock: any;
    clasificacion: any;
    fichaTecnica: any;
    uso: any;
    estado: any;
    serial: any;
    tipo: any;
    fechaSalida: any;
    fechaIngreso: any;
    fechaCaducidad: any;
    idElemento: number;
    nombreElemento: string;
  };
};
