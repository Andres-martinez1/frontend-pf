import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getDetalleEntrega } from "../../api/Detalles_entrega/getDetalles_entregas";
import { postDetallesEntrega, DetallesEntregaPostData } from "../../api/Detalles_entrega/postDetalle_entregas";
import { updateDetallesEntrega, DetallesEntregaPutData } from "../../api/Detalles_entrega/putDetalle_entregas";
import { deleteDetalleEntrega } from "../../api/Detalles_entrega/deleteDetalle_entregas";
import { GetDetalleEntrega } from "../../types/Detalles_entrega/GetDetalles_entrega";

export function useDetalleEntrega() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetDetalleEntrega[]>({
    queryKey: ["detalleEntrega"],
    queryFn: getDetalleEntrega,
  });

  const crearDetalleEntrega = useMutation({
    mutationFn: (data: DetallesEntregaPostData) => postDetallesEntrega(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detalleEntrega"] });
    },
  });

  const actualizarDetalleEntrega = useMutation({
    mutationFn: ({ id, data }: { id: number; data: DetallesEntregaPutData }) =>
      updateDetallesEntrega(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detalleEntrega"] });
    },
  });

  const eliminarDetalleEntrega = useMutation({
    mutationFn: (id: number) => deleteDetalleEntrega(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detalleEntrega"] });
    },
  });

  return {
    detalleEntrega: data ?? [],
    isLoading,
    isError,
    crearDetalleEntrega,
    actualizarDetalleEntrega,
    eliminarDetalleEntrega,
  };
}
