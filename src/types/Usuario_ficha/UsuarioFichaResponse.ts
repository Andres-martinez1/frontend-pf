import { UsuarioFicha } from "./UsuarioFicha";

export type UsuarioFichaResponse = {
  message: string;
  data: UsuarioFicha;
};

export type UsuarioFichasResponse = UsuarioFicha[];
