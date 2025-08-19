import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMunicipios } from "../../api/Municipios/getMunicipios";
import { postMunicipio, MunicipioPostData } from "../../api/Municipios/postMunicipio";
import { updateMunicipio, MunicipioPutData } from "../../api/Municipios/putMunicipio";
import { deleteMunicipio } from "../../api/Municipios/deleteMunicipio";
import { GetMunicipio } from "../../types/Municipios/GetMunicipio";

export function useMunicipios() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<GetMunicipio[]>({
    queryKey: ["municipios"],
    queryFn: getMunicipios,
  });

  const crearMunicipio = useMutation({
    mutationFn: (data: MunicipioPostData) => postMunicipio(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["municipios"] });
    },
  });

  const actualizarMunicipio = useMutation({
    mutationFn: ({ id, data }: { id: number; data: MunicipioPutData }) =>
      updateMunicipio(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["municipios"] });
    },
  });

  const eliminarMunicipio = useMutation({
    mutationFn: (id: number) => deleteMunicipio(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["municipios"] });
    },
  });

  return {
    municipios: data ?? [],
    isLoading,
    isError,
    crearMunicipio,
    actualizarMunicipio,
    eliminarMunicipio,
  };
}
