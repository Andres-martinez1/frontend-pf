import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCentros, getCentroById, postCentro, updateCentro, deleteCentro } from "../../api/Centros/index";
import { Centro } from "../../types/Centros/Centro";
import { CentroPostData } from "../../types/Centros/CentroPost";
import { CentroPutData } from "../../types/Centros/CentroPut";
import { CentroResponse } from "../../types/Centros/CentroResponse";

export function useCentros() {
  const queryClient = useQueryClient();

  const centrosQuery = useQuery<Centro[]>({
    queryKey: ["centros"],
    queryFn: getCentros,
  });

  const getCentroByIdQuery = (id: number) =>
    useQuery<Centro>({
      queryKey: ["centros", id],
      queryFn: () => getCentroById(id),
      enabled: !!id,
    });

  const crearCentro = useMutation<CentroResponse, Error, CentroPostData>({
    mutationFn: postCentro,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centros"] });
    },
  });

  const actualizarCentro = useMutation<
    CentroResponse,
    Error,
    { id: number; data: CentroPutData }
  >({
    mutationFn: ({ id, data }) => updateCentro(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centros"] });
    },
  });

  const eliminarCentro = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteCentro,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centros"] });
    },
  });

  return {
    centros: centrosQuery.data ?? [],
    isLoading: centrosQuery.isLoading,
    isError: centrosQuery.isError,
    getCentroByIdQuery,
    crearCentro,
    actualizarCentro,
    eliminarCentro,
  };
}
