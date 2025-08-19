// hooks/Fichas/useFicha.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getFichas } from "../../api/Ficha/getFichas";
import { postFicha, FichaPostData } from "../../api/Ficha/postFicha";
import { updateFicha, FichaPutData } from "../../api/Ficha/putFicha";
import { deleteFicha } from "../../api/Ficha/deleteFicha";
import { GetFicha } from "../../types/Ficha/GetFicha";

export function useFicha() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetFicha[]>({
    queryKey: ["fichas"],
    queryFn: getFichas,
  });

  const crearFicha = useMutation({
    mutationFn: (data: FichaPostData) => postFicha(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fichas"] });
    },
  });

  const actualizarFicha = useMutation({
    mutationFn: ({ id, data }: { id: number; data: FichaPutData }) =>
      updateFicha(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fichas"] });
    },
  });

  const eliminarFicha = useMutation({
    mutationFn: (id: number) => deleteFicha(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fichas"] });
    },
  });

  return {
    fichas: data ?? [],
    isLoading,
    isError,
    crearFicha,
    actualizarFicha,
    eliminarFicha,
  };
}
