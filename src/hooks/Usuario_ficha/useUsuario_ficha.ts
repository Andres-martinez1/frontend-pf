import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  getUsuarioFichas, 
  getUsuarioFichaById, 
  postUsuarioFicha, 
  updateUsuarioFicha, 
  deleteUsuarioFicha 
} from "../../api/Usuario_ficha";
import { UsuarioFicha } from "../../types/Usuario_ficha/UsuarioFicha";
import { UsuarioFichaPostData } from "../../types/Usuario_ficha/UsuarioFichaPost";
import { UsuarioFichaPutData } from "../../types/Usuario_ficha/UsuarioFichaPut";
import { UsuarioFichaResponse } from "../../types/Usuario_ficha/UsuarioFichaResponse";

export function useUsuarioFicha() {
  const queryClient = useQueryClient();

  const usuarioFichasQuery = useQuery<UsuarioFicha[]>({
    queryKey: ["usuarioFichas"],
    queryFn: getUsuarioFichas,
  });

  const getUsuarioFichaByIdQuery = (id: number) =>
    useQuery<UsuarioFicha>({
      queryKey: ["usuarioFichas", id],
      queryFn: () => getUsuarioFichaById(id),
      enabled: !!id,
    });

  const crearUsuarioFicha = useMutation<UsuarioFichaResponse, Error, UsuarioFichaPostData>({
    mutationFn: postUsuarioFicha,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["usuarioFichas"] }),
  });

  const actualizarUsuarioFicha = useMutation<UsuarioFichaResponse, Error, { id: number; data: UsuarioFichaPutData }>({
    mutationFn: ({ id, data }) => updateUsuarioFicha(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["usuarioFichas"] }),
  });

  const eliminarUsuarioFicha = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteUsuarioFicha,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["usuarioFichas"] }),
  });

  return {
    usuarioFichas: usuarioFichasQuery.data ?? [],
    isLoading: usuarioFichasQuery.isLoading,
    isError: usuarioFichasQuery.isError,
    getUsuarioFichaByIdQuery,
    crearUsuarioFicha,
    actualizarUsuarioFicha,
    eliminarUsuarioFicha,
  };
}
