import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsuarioFicha } from "../../api/Usuario_ficha/getUsuario_ficha";
import {
  postUsuarioFicha,
  UsuarioFichaPostData,
} from "../../api/Usuario_ficha/postUsuario_ficha";
import {
  updateUsuarioFicha,
  UsuarioFichaPutData,
} from "../../api/Usuario_ficha/putUsuario_ficha";
import { deleteUsuarioFicha } from "../../api/Usuario_ficha/deleteUsuario_ficha";
import { GetUsuarioFicha } from "../../types/Usuario_ficha/GetUsuario_ficha";

export function useUsuarioFicha() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetUsuarioFicha[]>({
    queryKey: ["usuarioFicha"],
    queryFn: getUsuarioFicha,
  });

  const crearUsuarioFicha = useMutation({
    mutationFn: (data: UsuarioFichaPostData) => postUsuarioFicha(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarioFicha"] });
    },
  });

  const actualizarUsuarioFicha = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UsuarioFichaPutData }) =>
      updateUsuarioFicha(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarioFicha"] });
    },
  });

  const eliminarUsuarioFicha = useMutation({
    mutationFn: (id: number) => deleteUsuarioFicha(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarioFicha"] });
    },
  });

  return {
    usuarioFicha: data ?? [],
    isLoading,
    isError,
    crearUsuarioFicha,
    actualizarUsuarioFicha,
    eliminarUsuarioFicha,
  };
}
