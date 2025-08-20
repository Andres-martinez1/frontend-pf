export type UsuarioFicha = {
  id: number;
  fkIdFicha: { idFicha: number; nombre?: string };
  fkIdUsuario: { idUsuario: number; nombres?: string; apellidos?: string };
};
