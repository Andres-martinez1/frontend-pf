export type Solicitud = {
  idSolicitud: number;
  estadoSolicitud?: string | null;
  fechaSolicitud?: string | null;
  fechaDevolucion?: string | null;
  prioridad?: string | null;
  motivo?: string | null;
  comentariosUsuario?: string | null;
  cantidad?: number | null;
  idUsuarioSolicitante: { idUsuario: number; nombre?: string };
};
