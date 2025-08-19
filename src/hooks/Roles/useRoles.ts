import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getRoles } from "../../api/Roles/getRol";
import { postRol, RolPostData } from "../../api/Roles/postRol";
import { updateRol, RolPutData } from "../../api/Roles/putRol";
import { deleteRol } from "../../api/Roles/deleteRol";
import { GetRol } from "../../types/Roles/GetRoles";
export function useRol() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetRol[]>({
    queryKey: ["roles"],
    queryFn: getRoles,
  });

  const crearRol = useMutation({
    mutationFn: (data: RolPostData) => postRol(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  const actualizarRol = useMutation({
    mutationFn: ({ id, data }: { id: number; data: RolPutData }) =>
      updateRol(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  const eliminarRol = useMutation({
    mutationFn: (id: number) => deleteRol(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  return {
    roles: data ?? [],
    isLoading,
    isError,
    crearRol,
    actualizarRol,
    eliminarRol,
  };
}
