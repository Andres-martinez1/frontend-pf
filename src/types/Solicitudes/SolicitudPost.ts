export type SolicitudPostData = {
  estadoSolicitud?: string;
  fechaDevolucion?: string;
  prioridad?: string;
  motivo?: string;
  comentariosUsuario?: string;
  cantidad?: number;
  idUsuarioSolicitante: number;
};
