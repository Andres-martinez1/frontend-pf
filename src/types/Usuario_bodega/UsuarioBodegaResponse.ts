import { UsuarioBodega } from "./UsuarioBodega";

export type UsuarioBodegaResponse = {
  message: string;
  data: UsuarioBodega;
};

export type UsuarioBodegasResponse = UsuarioBodega[];
