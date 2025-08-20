import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMunicipios, getMunicipioById, postMunicipio, updateMunicipio, deleteMunicipio } from "../../api/Municipios";
import { Municipio } from "../../types/Municipios/Municipio";
import { MunicipioPostData } from "../../types/Municipios/MunicipioPost";
import { MunicipioPutData } from "../../types/Municipios/MunicipioPut";
import { MunicipioResponse } from "../../types/Municipios/MunicipioResponse";

export function useMunicipios() {
  const queryClient = useQueryClient();

  const municipiosQuery = useQuery<Municipio[]>({
    queryKey: ["municipios"],
    queryFn: getMunicipios,
  });

  const getMunicipioByIdQuery = (id: number) =>
    useQuery<Municipio>({
      queryKey: ["municipios", id],
      queryFn: () => getMunicipioById(id),
      enabled: !!id,
    });

  const crearMunicipio = useMutation<MunicipioResponse, Error, MunicipioPostData>({
    mutationFn: postMunicipio,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["municipios"] }),
  });

  const actualizarMunicipio = useMutation<MunicipioResponse, Error, { id: number; data: MunicipioPutData }>({
    mutationFn: ({ id, data }) => updateMunicipio(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["municipios"] }),
  });

  const eliminarMunicipio = useMutation<{ message: string }, Error, number>({
    mutationFn: deleteMunicipio,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["municipios"] }),
  });

  return {
    municipios: municipiosQuery.data ?? [],
    isLoading: municipiosQuery.isLoading,
    isError: municipiosQuery.isError,
    getMunicipioByIdQuery,
    crearMunicipio,
    actualizarMunicipio,
    eliminarMunicipio,
  };
}
