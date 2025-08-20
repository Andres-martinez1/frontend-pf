import { BodegaElemento } from "../bodegaElemento/BodegaElemento";
import { Usuario } from "../../types/Usuarios/Usuario";
import { Sede } from "../../types/Sedes/Sede";
import { UsuarioBodega } from "../../types/Usuario_bodega/UsuarioBodega";

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
