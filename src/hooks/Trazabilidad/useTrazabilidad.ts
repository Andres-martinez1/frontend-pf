import { useQuery } from "@tanstack/react-query";
import { getTrazabilidad } from "../../api/Trazabilidad/getTrazabilidades";
import { GetTrazabilidad } from "../../types/Trazabilidad/GetTrazabilidad";

export function useTrazabilidad() {
  return useQuery<GetTrazabilidad[]>({
    queryKey: ["trazabilidad"],
    queryFn: getTrazabilidad,
  });
}
