import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getRoles, getRolById, postRol, updateRol, deleteRol } from "../../api/Roles";
import { Rol } from "../../types/Roles/Rol";
import { RolPostData } from "../../types/Roles/RolPost";
import { RolPutData } from "../../types/Roles/RolPut";
import { RolResponse } from "../../types/Roles/RolResponse";

export function useRoles() {
  const queryClient = useQueryClient();

  const rolesQuery = useQuery<Rol[]>({
    queryKey: ["roles"],
    queryFn: getRoles,
  });

  const getRolByIdQuery = (id: number) =>
    useQuery<Rol>({
      queryKey: ["roles", id],
      queryFn: () => getRolById(id),
      enabled: !!id,
    });

  const crearRol = useMutation<RolResponse, Error, RolPostData>({
    mutationFn: postRol,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["roles"] }),
  });

  const actualizarRol = useMutation<RolResponse, Error, { id: number; data: RolPutData }>({
    mutationFn: ({ id, data }) => updateRol(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["roles"] }),
  });

  const eliminarRol = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteRol,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["roles"] }),
  });

  return {
    roles: rolesQuery.data ?? [],
    isLoading: rolesQuery.isLoading,
    isError: rolesQuery.isError,
    getRolByIdQuery,
    crearRol,
    actualizarRol,
    eliminarRol,
  };
}
