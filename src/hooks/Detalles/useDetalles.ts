import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getDetalle } from "../../api/Detalles/getDetalles";
import { postDetalles, DetallesPostData } from "../../api/Detalles/postDetalle";
import { updateDetalles, DetallesPutData } from "../../api/Detalles/putDetalle";
import { deleteDetalle } from "../../api/Detalles/deleteDetalle";
import { GetDetalle } from "../../types/Detalles/GetDetalle";

export function useDetalles() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetDetalle[]>({
    queryKey: ["detalle"],
    queryFn: getDetalle,
  });

  const crearDetalle = useMutation({
    mutationFn: (data: DetallesPostData) => postDetalles(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detalle"] });
    },
  });

  const actualizarDetalle = useMutation({
    mutationFn: ({ id, data }: { id: number; data: DetallesPutData }) =>
      updateDetalles(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detalle"] });
    },
  });

  const eliminarDetalle = useMutation({
    mutationFn: (id: number) => deleteDetalle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detalle"] });
    },
  });

  return {
    detalles: data ?? [],
    isLoading,
    isError,
    crearDetalle,
    actualizarDetalle,
    eliminarDetalle,
  };
}
