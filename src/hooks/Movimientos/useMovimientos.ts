import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMovimientos, getMovimientoById, postMovimiento, updateMovimiento, deleteMovimiento } from "../../api/Movimientos";
import { Movimiento } from "../../types/Movimientos/Movimiento";
import { MovimientoPostData } from "../../types/Movimientos/MovimientoPost";
import { MovimientoPutData } from "../../types/Movimientos/MovimientoPut";
import { MovimientoResponse } from "../../types/Movimientos/MovimientoResponse";

export function useMovimientos() {
  const queryClient = useQueryClient();

  const movimientosQuery = useQuery<Movimiento[]>({
    queryKey: ["movimientos"],
    queryFn: getMovimientos,
  });

  const getMovimientoByIdQuery = (id: number) =>
    useQuery<Movimiento>({
      queryKey: ["movimientos", id],
      queryFn: () => getMovimientoById(id),
      enabled: !!id,
    });

  const crearMovimiento = useMutation<MovimientoResponse, Error, MovimientoPostData>({
    mutationFn: postMovimiento,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["movimientos"] }),
  });

  const actualizarMovimiento = useMutation<MovimientoResponse, Error, { id: number; data: MovimientoPutData }>({
    mutationFn: ({ id, data }) => updateMovimiento(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["movimientos"] }),
  });

  const eliminarMovimiento = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteMovimiento,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["movimientos"] }),
  });

  return {
    movimientos: movimientosQuery.data ?? [],
    isLoading: movimientosQuery.isLoading,
    isError: movimientosQuery.isError,
    getMovimientoByIdQuery,
    crearMovimiento,
    actualizarMovimiento,
    eliminarMovimiento,
  };
}
