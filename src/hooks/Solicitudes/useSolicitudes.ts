import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getSolicitudes, getSolicitudById, postSolicitud, updateSolicitud, deleteSolicitud } from "../../api/Solicitudes";
import { Solicitud } from "../../types/Solicitudes/Solicitud";
import { SolicitudPostData } from "../../types/Solicitudes/SolicitudPost";
import { SolicitudPutData } from "../../types/Solicitudes/SolicitudPut";
import { SolicitudResponse } from "../../types/Solicitudes/SolicitudResponse";

export function useSolicitudes() {
  const queryClient = useQueryClient();

  const solicitudesQuery = useQuery<Solicitud[]>({
    queryKey: ["solicitudes"],
    queryFn: getSolicitudes,
  });

  const getSolicitudByIdQuery = (id: number) =>
    useQuery<Solicitud>({
      queryKey: ["solicitudes", id],
      queryFn: () => getSolicitudById(id),
      enabled: !!id,
    });

  const crearSolicitud = useMutation<SolicitudResponse, Error, SolicitudPostData>({
    mutationFn: postSolicitud,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["solicitudes"] }),
  });

  const actualizarSolicitud = useMutation<SolicitudResponse, Error, { id: number; data: SolicitudPutData }>({
    mutationFn: ({ id, data }) => updateSolicitud(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["solicitudes"] }),
  });

  const eliminarSolicitud = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteSolicitud,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["solicitudes"] }),
  });

  return {
    solicitudes: solicitudesQuery.data ?? [],
    isLoading: solicitudesQuery.isLoading,
    isError: solicitudesQuery.isError,
    getSolicitudByIdQuery,
    crearSolicitud,
    actualizarSolicitud,
    eliminarSolicitud,
  };
}
