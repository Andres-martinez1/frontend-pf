export type UsuarioPostData = {
  identificacion: string;
  nombres: string;
  apellidos: string;
  correo: string;
  password: string;
  img?: string;
  estado?: string;
  ubicacion?: string;
  fechaIngreso?: string;
  habilidadesTecnicas?: string;
  fkIdArea?: number;
  fkIdPermisos?: number;
  fkIdRol?: number;
};
