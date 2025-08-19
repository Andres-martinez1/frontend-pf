import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsuarioBodega } from "../../api/Usuario_bodega/getUsuario_bodega";
import { postUsuarioBodega, UsuarioBodegaPostData } from "../../api/Usuario_bodega/postUsuario_bodega";
import { updateUsuarioBodega, UsuarioBodegaPutData } from "../../api/Usuario_bodega/putUsuario_bodega";
import { deleteUsuarioBodega } from "../../api/Usuario_bodega/deleteUsuario_bodega";
import { GetUsuarioBodega } from "../../types/Usuario_bodega/GetUsuario_bodega";

export function useUsuarioBodega() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetUsuarioBodega[]>({
    queryKey: ["usuariosBodega"],
    queryFn: getUsuarioBodega,
  });

  const crearUsuarioBodega = useMutation({
    mutationFn: (data: UsuarioBodegaPostData) => postUsuarioBodega(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuariosBodega"] });
    },
  });

  const actualizarUsuarioBodega = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UsuarioBodegaPutData }) =>
      updateUsuarioBodega(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuariosBodega"] });
    },
  });

  const eliminarUsuarioBodega = useMutation({
    mutationFn: (id: number) => deleteUsuarioBodega(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuariosBodega"] });
    },
  });

  return {
    usuariosBodega: data ?? [],
    isLoading,
    isError,
    crearUsuarioBodega,
    actualizarUsuarioBodega,
    eliminarUsuarioBodega,
  };
}
