import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAreas } from "../../api/Areas/getAreas";
import { postArea, AreaPostData } from "../../api/Areas/postArea";
import { updateArea, AreaPutData } from "../../api/Areas/putArea";
import { deleteArea } from "../../api/Areas/deleteArea";
import { GetArea } from "../../types/Areas/GetArea";

export function useAreas() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetArea[]>({
    queryKey: ["areas"],
    queryFn: getAreas,
  });

  const crearArea = useMutation({
    mutationFn: (data: AreaPostData) => postArea(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
  });

  const actualizarArea = useMutation({
    mutationFn: ({ id, data }: { id: number; data: AreaPutData }) =>
      updateArea(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
  });

  const eliminarArea = useMutation({
    mutationFn: (id: number) => deleteArea(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
  });

  return {
    areas: data ?? [],
    isLoading,
    isError,
    crearArea,
    actualizarArea,
    eliminarArea,
  };
}
