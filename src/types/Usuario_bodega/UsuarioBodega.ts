export type UsuarioBodega = {
  id: number;
  fkIdBodega: { idBodega: number; nombre?: string };
  fkIdUsuario: { idUsuario: number; nombres?: string; apellidos?: string };
};
