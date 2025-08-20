import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getBodegaElementos,
  getBodegaElementoById,
  postBodegaElemento,
  putBodegaElemento,
  deleteBodegaElemento,
} from "../../api/bodegaElemento";
import { BodegaElemento } from "../../types/bodegaElemento/BodegaElemento";
import { BodegaElementoPost } from "../../types/bodegaElemento/BodegaElementoPost";
import { BodegaElementoPut } from "../../types/bodegaElemento/BodegaElementoPut";

export function useBodegaElementos() {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isError,
  } = useQuery<{ message: string; data: BodegaElemento[] }>({
    queryKey: ["bodega-elementos"],
    queryFn: getBodegaElementos,
  });

  const crear = useMutation({
    mutationFn: (payload: BodegaElementoPost) => postBodegaElemento(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bodega-elementos"] }),
  });

  const actualizar = useMutation({
    mutationFn: ({ id, data }: { id: number; data: BodegaElementoPut }) =>
      putBodegaElemento(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bodega-elementos"] }),
  });

  const eliminar = useMutation({
    mutationFn: (id: number) => deleteBodegaElemento(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bodega-elementos"] }),
  });

  return {
    registros: data?.data ?? [],
    isLoading,
    isError,
    crear,
    actualizar,
    eliminar,
  };
}


export function useBodegaElemento(id: number) {
  return useQuery<{ message: string; data: BodegaElemento }>({
    queryKey: ["bodega-elemento", id],
    queryFn: () => getBodegaElementoById(id),
    enabled: !!id, 
  });
}
