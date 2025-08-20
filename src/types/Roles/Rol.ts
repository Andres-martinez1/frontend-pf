export type Rol = {
  idRol: number;
  nombreRol: string;
  permisos?: { idPermiso: number; nombrePermiso: string }[];
  usuarios?: { idUsuario: number; nombre: string }[];
};
