import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProgramas, getProgramaById, postPrograma, updatePrograma, deletePrograma } from "../../api/Programas";
import { Programa } from "../../types/Programas/Programa";
import { ProgramaPostData } from "../../types/Programas/ProgramaPost";
import { ProgramaPutData } from "../../types/Programas/ProgramaPut";
import { ProgramaResponse } from "../../types/Programas/ProgramaResponse";

export function useProgramas() {
  const queryClient = useQueryClient();

  const programasQuery = useQuery<Programa[]>({
    queryKey: ["programas"],
    queryFn: getProgramas,
  });

  const getProgramaByIdQuery = (id: number) =>
    useQuery<Programa>({
      queryKey: ["programas", id],
      queryFn: () => getProgramaById(id),
      enabled: !!id,
    });

  const crearPrograma = useMutation<ProgramaResponse, Error, ProgramaPostData>({
    mutationFn: postPrograma,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["programas"] }),
  });

  const actualizarPrograma = useMutation<ProgramaResponse, Error, { id: number; data: ProgramaPutData }>({
    mutationFn: ({ id, data }) => updatePrograma(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["programas"] }),
  });

  const eliminarPrograma = useMutation<{ message: string }, Error, number>({
    mutationFn: deletePrograma,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["programas"] }),
  });

  return {
    programas: programasQuery.data ?? [],
    isLoading: programasQuery.isLoading,
    isError: programasQuery.isError,
    getProgramaByIdQuery,
    crearPrograma,
    actualizarPrograma,
    eliminarPrograma,
  };
}
