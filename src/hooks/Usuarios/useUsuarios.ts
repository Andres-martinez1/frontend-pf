import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  getUsuarios, 
  getUsuarioById, 
  postUsuario, 
  updateUsuario, 
  deleteUsuario 
} from "../../api/Usuarios";
import { Usuario } from "../../types/Usuarios/Usuario";
import { UsuarioPostData } from "../../types/Usuarios/UsuarioPost";
import { UsuarioPutData } from "../../types/Usuarios/UsuarioPut";
import { UsuarioResponse } from "../../types/Usuarios/UsuarioResponse";

export function useUsuarios() {
  const queryClient = useQueryClient();

  const usuariosQuery = useQuery<Usuario[]>({
    queryKey: ["usuarios"],
    queryFn: getUsuarios,
  });

  const crearUsuario = useMutation<UsuarioResponse, Error, UsuarioPostData>({
    mutationFn: postUsuario,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["usuarios"] }),
  });

  const actualizarUsuario = useMutation<
    UsuarioResponse, 
    Error, 
    { id: number; data: UsuarioPutData }
  >({
    mutationFn: ({ id, data }) => updateUsuario(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["usuarios"] }),
  });

  const eliminarUsuario = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteUsuario,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["usuarios"] }),
  });

  return {
    usuarios: usuariosQuery.data ?? [],
    isLoading: usuariosQuery.isLoading,
    isError: usuariosQuery.isError,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
  };
}

// 🔹 Hook separado para obtener un solo usuario por ID
export function useUsuario(id: number) {
  return useQuery<Usuario>({
    queryKey: ["usuarios", id],
    queryFn: () => getUsuarioById(id),
    enabled: !!id, // evita ejecutar si el id es 0 o undefined
  });
}
