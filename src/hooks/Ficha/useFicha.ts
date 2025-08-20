import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getFichas, getFichaById, postFicha, updateFicha, deleteFicha } from "../../api/Ficha";
import { Ficha } from "../../types/Ficha/Ficha";
import { FichaPostData } from "../../types/Ficha/FichaPost";
import { FichaPutData } from "../../types/Ficha/FichaPut";
import { FichaResponse } from "../../types/Ficha/FichaResponse";

export function useFichas() {
  const queryClient = useQueryClient();

  const fichasQuery = useQuery<Ficha[]>({
    queryKey: ["fichas"],
    queryFn: getFichas,
  });

  const getFichaByIdQuery = (id: number) =>
    useQuery<Ficha>({
      queryKey: ["fichas", id],
      queryFn: () => getFichaById(id),
      enabled: !!id,
    });

  const crearFicha = useMutation<FichaResponse, Error, FichaPostData>({
    mutationFn: postFicha,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fichas"] }),
  });

  const actualizarFicha = useMutation<FichaResponse, Error, { id: number; data: FichaPutData }>({
    mutationFn: ({ id, data }) => updateFicha(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fichas"] }),
  });

  const eliminarFicha = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteFicha,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fichas"] }),
  });

  return {
    fichas: fichasQuery.data ?? [],
    isLoading: fichasQuery.isLoading,
    isError: fichasQuery.isError,
    getFichaByIdQuery,
    crearFicha,
    actualizarFicha,
    eliminarFicha,
  };
}
