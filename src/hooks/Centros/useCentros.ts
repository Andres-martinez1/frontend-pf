// src/hooks/Centros/useCentros.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCentro } from "../../api/Centros/getCentros";
import { postCentro, CentroPostData } from "../../api/Centros/postCentro";
import { updateCentro, CentroPutData } from "../../api/Centros/putCentro";
import { deleteCentro } from "../../api/Centros/deleteCentro";
import { GetCentro } from "../../types/Centros/GetCentro";

export function useCentros() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetCentro[]>({
    queryKey: ["centros"],
    queryFn: getCentro,
  });

  const crearCentro = useMutation({
    mutationFn: (data: CentroPostData) => postCentro(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centros"] });
    },
  });

  const actualizarCentro = useMutation({
    mutationFn: ({ id, data }: { id: number; data: CentroPutData }) =>
      updateCentro(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centros"] });
    },
  });

  const eliminarCentro = useMutation({
    mutationFn: (id: number) => deleteCentro(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centros"] });
    },
  });

  return {
    centros: data ?? [],
    isLoading,
    isError,
    crearCentro,
    actualizarCentro,
    eliminarCentro,
  };
}
