import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getElementos, getElementoById, postElemento, updateElemento, deleteElemento } from "../../api/Elementos/index";
import { Elemento } from "../../types/Elementos/Elemento";
import { ElementoPostData } from "../../types/Elementos/ElementoPost";
import { ElementoPutData } from "../../types/Elementos/ElementoPut";
import { ElementoResponse } from "../../types/Elementos/ElementoResponse";

export function useElementos() {
  const queryClient = useQueryClient();

  const elementosQuery = useQuery<Elemento[]>({
    queryKey: ["elementos"],
    queryFn: getElementos,
  });

  const getElementoByIdQuery = (id: number) =>
    useQuery<Elemento>({
      queryKey: ["elementos", id],
      queryFn: () => getElementoById(id),
      enabled: !!id,
    });

  const crearElemento = useMutation<ElementoResponse, Error, ElementoPostData>({
    mutationFn: postElemento,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["elementos"] });
    },
  });

  const actualizarElemento = useMutation<
    ElementoResponse,
    Error,
    { id: number; data: ElementoPutData }
  >({
    mutationFn: ({ id, data }) => updateElemento(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["elementos"] });
    },
  });

  const eliminarElemento = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteElemento,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["elementos"] });
    },
  });

  return {
    elementos: elementosQuery.data ?? [],
    isLoading: elementosQuery.isLoading,
    isError: elementosQuery.isError,
    getElementoByIdQuery,
    crearElemento,
    actualizarElemento,
    eliminarElemento,
  };
}
