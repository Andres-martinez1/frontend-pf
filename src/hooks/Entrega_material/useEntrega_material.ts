import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getEntregaMaterial } from "../../api/Entrega_material/getEntrega_material";
import {
  postEntregaMaterial,
  EntregaMaterialPostData,
} from "../../api/Entrega_material/postEntrega_material";
import {
  updateEntregaMaterial,
  EntregaMaterialPutData,
} from "../../api/Entrega_material/putEntrega_material";
import { deleteEntregaMaterial } from "../../api/Entrega_material/deleteEntrega_material";
import { GetEntregaMaterial } from "../../types/Entrega_material/GetEntrega_material";

export function useEntregaMaterial() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetEntregaMaterial[]>({
    queryKey: ["entregaMaterial"],
    queryFn: getEntregaMaterial,
  });

  const crearEntregaMaterial = useMutation({
    mutationFn: (data: EntregaMaterialPostData) => postEntregaMaterial(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entregaMaterial"] });
    },
  });

  const actualizarEntregaMaterial = useMutation({
    mutationFn: ({ id, data }: { id: number; data: EntregaMaterialPutData }) =>
      updateEntregaMaterial(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entregaMaterial"] });
    },
  });

  const eliminarEntregaMaterial = useMutation({
    mutationFn: (id: number) => deleteEntregaMaterial(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entregaMaterial"] });
    },
  });

  return {
    entregasMaterial: data ?? [],
    isLoading,
    isError,
    crearEntregaMaterial,
    actualizarEntregaMaterial,
    eliminarEntregaMaterial,
  };
}
