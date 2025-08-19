import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getSede } from "../../api/Sedes/getSedes";
import { postSede, SedePostData } from "../../api/Sedes/postSede";
import { updateSede, SedePutData } from "../../api/Sedes/putSede";
import { deleteSede } from "../../api/Sedes/deleteSede";
import { GetSede } from "../../types/Sedes/GetSede";

export function useSedes() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetSede[]>({
    queryKey: ["sedes"],
    queryFn: getSede,
  });

  const crearSede = useMutation({
    mutationFn: (data: SedePostData) => postSede(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sedes"] });
    },
  });

  const actualizarSede = useMutation({
    mutationFn: ({ id, data }: { id: number; data: SedePutData }) =>
      updateSede(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sedes"] });
    },
  });

  const eliminarSede = useMutation({
    mutationFn: (id: number) => deleteSede(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sedes"] });
    },
  });

  return {
    sedes: data ?? [],
    isLoading,
    isError,
    crearSede,
    actualizarSede,
    eliminarSede,
  };
}
