import { useQuery } from "@tanstack/react-query";
import { getElementos } from "../../api/Elementos/getElementos";
import { GetElemento } from "../../types/Elementos/GetElemento";

export function useElementos() {
  return useQuery<GetElemento[]>({
    queryKey: ["elementos"],
    queryFn: getElementos,
  });
}
