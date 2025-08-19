import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPrograma } from "../../api/Programas/getProgramas";
import { postPrograma, ProgramaPostData } from "../../api/Programas/postPrograma";
import { updatePrograma, ProgramaPutData } from "../../api/Programas/putPrograma";
import { deletePrograma } from "../../api/Programas/deletePrograma";
import { GetPrograma } from "../../types/Programas/GetPrograma";

export function useProgramas() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetPrograma[]>({
    queryKey: ["programas"],
    queryFn: getPrograma,
  });

  const crearPrograma = useMutation({
    mutationFn: (data: ProgramaPostData) => postPrograma(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["programas"] });
    },
  });

  const actualizarPrograma = useMutation({
    mutationFn: ({ id, data }: { id: number; data: ProgramaPutData }) =>
      updatePrograma(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["programas"] });
    },
  });

  const eliminarPrograma = useMutation({
    mutationFn: (id: number) => deletePrograma(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["programas"] });
    },
  });

  return {
    programas: data ?? [],
    isLoading,
    isError,
    crearPrograma,
    actualizarPrograma,
    eliminarPrograma,
  };
}
