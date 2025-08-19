import { useQuery } from "@tanstack/react-query";
import { getSalida } from "../../api/Salidas/getSalidas";
import { GetSalida } from "../../types/Salidas/GetSalida";

export function useSalida() {
  return useQuery<GetSalida[]>({
    queryKey: ["salidas"],
    queryFn: getSalida,
  });
}
