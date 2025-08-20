import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getSedes, getSedeById, postSede, updateSede, deleteSede } from "../../api/Sedes";
import { Sede } from "../../types/Sedes/Sede";
import { SedePostData } from "../../types/Sedes/SedePost";
import { SedePutData } from "../../types/Sedes/SedePut";
import { SedeResponse } from "../../types/Sedes/SedeResponse";

export function useSedes() {
  const queryClient = useQueryClient();

  const sedesQuery = useQuery<Sede[]>({
    queryKey: ["sedes"],
    queryFn: getSedes,
  });

  const getSedeByIdQuery = (id: number) =>
    useQuery<Sede>({
      queryKey: ["sedes", id],
      queryFn: () => getSedeById(id),
      enabled: !!id,
    });

  const crearSede = useMutation<SedeResponse, Error, SedePostData>({
    mutationFn: postSede,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["sedes"] }),
  });

  const actualizarSede = useMutation<SedeResponse, Error, { id: number; data: SedePutData }>({
    mutationFn: ({ id, data }) => updateSede(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["sedes"] }),
  });

  const eliminarSede = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteSede,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["sedes"] }),
  });

  return {
    sedes: sedesQuery.data ?? [],
    isLoading: sedesQuery.isLoading,
    isError: sedesQuery.isError,
    getSedeByIdQuery,
    crearSede,
    actualizarSede,
    eliminarSede,
  };
}
