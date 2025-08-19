import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getSolicitud } from "../../api/Solicitudes/getSolicitudes";
import { postSolicitud, SolicitudPostData } from "../../api/Solicitudes/postSolicitudes";
import { updateSolicitud, SolicitudPutData } from "../../api/Solicitudes/putSolicitudes";
import { deleteSolicitud } from "../../api/Solicitudes/deleteSolicitudes";
import { GetSolicitud } from "../../types/Solicitudes/GetSolicitudes";

export function useSolicitudes() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetSolicitud[]>({
    queryKey: ["solicitudes"],
    queryFn: getSolicitud,
  });

  const crearSolicitud = useMutation({
    mutationFn: (data: SolicitudPostData) => postSolicitud(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["solicitudes"] });
    },
  });

  const actualizarSolicitud = useMutation({
    mutationFn: ({ id, data }: { id: number; data: SolicitudPutData }) =>
      updateSolicitud(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["solicitudes"] });
    },
  });

  const eliminarSolicitud = useMutation({
    mutationFn: (id: number) => deleteSolicitud(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["solicitudes"] });
    },
  });

  return {
    solicitudes: data ?? [],
    isLoading,
    isError,
    crearSolicitud,
    actualizarSolicitud,
    eliminarSolicitud,
  };
}
