import { Solicitud } from "./Solicitud";

export type SolicitudResponse = {
  message: string;
  data: Solicitud;
};

export type SolicitudesResponse = Solicitud[];
