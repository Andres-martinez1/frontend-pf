export type GetEntrada = {
  idEntrada: number;
  cantidadIngresada: string;
  proveedor: string;
  fechaIngreso: string;
  fkIdBodega: {
    idBodega: number;
    nombreBodega: string;
    encargado: string;
  };
  fkIdElemento: {
    idElemento: number;
    nombreElemento: string;
    stock: number;
    clasificacion: string;
    fichaTecnica: string;
    uso: string;
    estado: string;
    serial: string;
    tipo: string;
    fechaIngreso: string;
    fechaSalida: string | null;
    fechaCaducidad: string;
  };
};
