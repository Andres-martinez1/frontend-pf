import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMovimientos } from "../../api/Movimientos/getMovimientos";
import { postMovimiento, MovimientoPostData } from "../../api/Movimientos/postMovimiento";
import { updateMovimiento, MovimientoPutData } from "../../api/Movimientos/putMovimiento";
import { deleteMovimiento } from "../../api/Movimientos/deleteMovimiento";
import { GetMovimiento } from "../../types/Movimientos/GetMovimiento";

export function useMovimiento() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetMovimiento[]>({
    queryKey: ["movimientos"],
    queryFn: getMovimientos,
  });

  const crearMovimiento = useMutation({
    mutationFn: (nuevo: MovimientoPostData) => postMovimiento(nuevo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movimientos"] });
    },
  });

  const actualizarMovimiento = useMutation({
    mutationFn: ({ id, data }: { id: number; data: MovimientoPutData }) =>
      updateMovimiento(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movimientos"] });
    },
  });

  const eliminarMovimiento = useMutation({
    mutationFn: (id: number) => deleteMovimiento(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movimientos"] });
    },
  });

  return {
    movimientos: data ?? [],
    isLoading,
    isError,
    crearMovimiento,
    actualizarMovimiento,
    eliminarMovimiento,
  };
}
