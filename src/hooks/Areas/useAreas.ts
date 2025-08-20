import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAreas, getAreaById, postArea, updateArea, deleteArea } from "../../api/Areas/index";
import { Area } from "../../types/Areas/Area";
import { AreaPostData } from "../../types/Areas/AreaPost";
import { AreaPutData } from "../../types/Areas/AreaPut";
import { AreaResponse } from "../../types/Areas/AreaResponse";

export function useAreas() {
  const queryClient = useQueryClient();

  const areasQuery = useQuery<Area[]>({
    queryKey: ["areas"],
    queryFn: getAreas,
  });

  const getAreaByIdQuery = (id: number) =>
    useQuery<Area>({
      queryKey: ["areas", id],
      queryFn: () => getAreaById(id),
      enabled: !!id,
    });

  const crearArea = useMutation<AreaResponse, Error, AreaPostData>({
    mutationFn: postArea,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
  });

  const actualizarArea = useMutation<
    AreaResponse,
    Error,
    { id: number; data: AreaPutData }
  >({
    mutationFn: ({ id, data }) => updateArea(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
  });

  const eliminarArea = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteArea,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
  });

  return {
    areas: areasQuery.data ?? [],
    isLoading: areasQuery.isLoading,
    isError: areasQuery.isError,
    getAreaByIdQuery,
    crearArea,
    actualizarArea,
    eliminarArea,
  };
}
