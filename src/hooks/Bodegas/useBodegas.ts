import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getBodegas,
  getBodegaById,
  postBodega,
  putBodega,
  deleteBodega,
} from "../../api/Bodegas/index";
import { Bodega } from "../../types/Bodegas/Bodega";
import { BodegaPost } from "../../types/Bodegas/BodegaPost";
import { BodegaPut } from "../../types/Bodegas/BodegaPut";

export function useBodegas() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<Bodega[]>({
    queryKey: ["bodegas"],
    queryFn: getBodegas,
  });

  const crearBodega = useMutation({
    mutationFn: (payload: BodegaPost) => postBodega(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bodegas"] }),
  });

  const actualizarBodega = useMutation({
    mutationFn: ({ id, data }: { id: number; data: BodegaPut }) =>
      putBodega(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bodegas"] }),
  });

  const eliminarBodega = useMutation({
    mutationFn: (id: number) => deleteBodega(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bodegas"] }),
  });

  return {
    registros: data ?? [],
    isLoading,
    isError,
    crearBodega,
    actualizarBodega,
    eliminarBodega,
  };
}

export function useBodega(id: number) {
  return useQuery<Bodega>({
    queryKey: ["bodega", id],
    queryFn: () => getBodegaById(id),
    enabled: !!id,
  });
}
