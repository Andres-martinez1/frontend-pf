import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getDetalleSolicitud } from "../../api/Detalle_solicitud/getDetalles_solicitud";
import { postDetallesSolicitud, DetallesSolicitudesPostData } from "../../api/Detalle_solicitud/postDetalle_solicitud";
import { updateDetallesSolicitud, DetallesSolicitudesPutData } from "../../api/Detalle_solicitud/putDetalle_solicitud";
import { deleteDetalleSolicitud } from "../../api/Detalle_solicitud/deleteDetalle_solicitud";
import { GetDetalleSolicitud } from "../../types/Detalle_solicitud/GetDetalles._solicitud";

export function useDetalleSolicitud() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetDetalleSolicitud[]>({
    queryKey: ["detalleSolicitud"],
    queryFn: getDetalleSolicitud,
  });

  const crearDetalleSolicitud = useMutation({
    mutationFn: (data: DetallesSolicitudesPostData) => postDetallesSolicitud(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detalleSolicitud"] });
    },
  });

  const actualizarDetalleSolicitud = useMutation({
    mutationFn: ({ id, data }: { id: number; data: DetallesSolicitudesPutData }) =>
      updateDetallesSolicitud(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detalleSolicitud"] });
    },
  });

  const eliminarDetalleSolicitud = useMutation({
    mutationFn: (id: number) => deleteDetalleSolicitud(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detalleSolicitud"] });
    },
  });

  return {
    detallesSolicitud: data ?? [],
    isLoading,
    isError,
    crearDetalleSolicitud,
    actualizarDetalleSolicitud,
    eliminarDetalleSolicitud,
  };
}
