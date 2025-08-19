import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsuarios } from "../../api/Usuarios/getUsuarios";
import { postUsuario, UsuarioPostData } from "../../api/Usuarios/postUsuario";
import { updateUsuario, UsuarioPutData } from "../../api/Usuarios/putUsuario";
import { deleteUsuarios } from "../../api/Usuarios/deleteUsuario";
import { GetUsuario } from "../../types/Usuarios/GetUsuario";

export function useUsuarios() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetUsuario[]>({
    queryKey: ["usuarios"],
    queryFn: getUsuarios,
  });

  const crearUsuario = useMutation({
    mutationFn: (data: UsuarioPostData) => postUsuario(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
    },
  });

  const actualizarUsuario = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UsuarioPutData }) =>
      updateUsuario(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
    },
  });

  const eliminarUsuario = useMutation({
    mutationFn: (id: number) => deleteUsuarios(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
    },
  });

  return {
    usuarios: data ?? [],
    isLoading,
    isError,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
  };
}
