import { GetUsuario } from "../Usuarios/GetUsuario";

export interface GetMovimiento {
  idMovimientos: number;
  fecha: Date;
  responsable: string;
  pedir: string;
  suministrar: string;
  devolver: string;
  fkIdElemento: {
    idElemento: number;
    nombreElemento: string;
  };
  fkIdUsuario: GetUsuario;
}
