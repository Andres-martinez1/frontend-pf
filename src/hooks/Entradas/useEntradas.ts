import { useQuery } from "@tanstack/react-query";
import { getEntradas } from "../../api/Entradas/getEntradas";
import { GetEntrada } from "../../types/Entradas/GetEntrada";

export function useEntradas() {
  return useQuery<GetEntrada[]>({
    queryKey: ["entradas"],
    queryFn: getEntradas,
  });
}
