import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  getUsuarioBodegas, 
  getUsuarioBodegaById, 
  postUsuarioBodega, 
  updateUsuarioBodega, 
  deleteUsuarioBodega 
} from "../../api/Usuario_bodega";
import { UsuarioBodega } from "../../types/Usuario_bodega/UsuarioBodega";
import { UsuarioBodegaPostData } from "../../types/Usuario_bodega/UsuarioBodegaPost";
import { UsuarioBodegaPutData } from "../../types/Usuario_bodega/UsuarioBodegaPut";
import { UsuarioBodegaResponse } from "../../types/Usuario_bodega/UsuarioBodegaResponse";

export function useUsuarioBodega() {
  const queryClient = useQueryClient();

  const usuarioBodegasQuery = useQuery<UsuarioBodega[]>({
    queryKey: ["usuarioBodegas"],
    queryFn: getUsuarioBodegas,
  });

  const getUsuarioBodegaByIdQuery = (id: number) =>
    useQuery<UsuarioBodega>({
      queryKey: ["usuarioBodegas", id],
      queryFn: () => getUsuarioBodegaById(id),
      enabled: !!id,
    });

  const crearUsuarioBodega = useMutation<UsuarioBodegaResponse, Error, UsuarioBodegaPostData>({
    mutationFn: postUsuarioBodega,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["usuarioBodegas"] }),
  });

  const actualizarUsuarioBodega = useMutation<UsuarioBodegaResponse, Error, { id: number; data: UsuarioBodegaPutData }>({
    mutationFn: ({ id, data }) => updateUsuarioBodega(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["usuarioBodegas"] }),
  });

  const eliminarUsuarioBodega = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteUsuarioBodega,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["usuarioBodegas"] }),
  });

  return {
    usuarioBodegas: usuarioBodegasQuery.data ?? [],
    isLoading: usuarioBodegasQuery.isLoading,
    isError: usuarioBodegasQuery.isError,
    getUsuarioBodegaByIdQuery,
    crearUsuarioBodega,
    actualizarUsuarioBodega,
    eliminarUsuarioBodega,
  };
}
