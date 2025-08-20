import { BodegaElemento } from "../bodegaElemento/BodegaElemento";
import { Usuario } from "../../types/usuarios/Usuario";
import { Sede } from "../../types/Sedes/Sede";
import { UsuarioBodega } from "../../types/UsuarioBodega/UsuarioBodega";

export type Bodega = {
  idBodega: number;
  nombreBodega: string;
  img: string | null;
  capacidadMaxima: number | null;
  descripcion: string | null;
  fkIdSede: Sede;
  fkIdUsuario: Usuario;
  bodegaElementos: BodegaElemento[];
  usuarioBodegas: UsuarioBodega[];
};
