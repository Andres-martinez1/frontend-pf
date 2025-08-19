// src/hooks/Bodegas/useBodegas.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBodega } from "../../api/Bodegas/getBodegas";
import { postBodega, BodegaPostData } from "../../api/Bodegas/postBodega";
import { updateBodega, BodegaPutData } from "../../api/Bodegas/putBodega";
import { deleteBodega } from "../../api/Bodegas/deleteBodega";
import { GetBodega } from "../../types/Bodegas/GetBodega";

export function useBodegas() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetBodega[]>({
    queryKey: ["bodegas"],
    queryFn: getBodega,
  });

  const crearBodega = useMutation({
    mutationFn: (data: BodegaPostData) => postBodega(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bodegas"] });
    },
  });

  const actualizarBodega = useMutation({
    mutationFn: ({ id, data }: { id: number; data: BodegaPutData }) =>
      updateBodega(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bodegas"] });
    },
  });

  const eliminarBodega = useMutation({
    mutationFn: (id: number) => deleteBodega(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bodegas"] });
    },
  });

  return {
    bodegas: data ?? [],
    isLoading,
    isError,
    crearBodega,
    actualizarBodega,
    eliminarBodega,
  };
}
