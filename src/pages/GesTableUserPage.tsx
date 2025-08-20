import GesTablesUser from "../components/atomic/templates/GesTablesUser";
import { useAreas } from '../hooks/Areas/useAreas';
import { useBodegaElementos } from "../hooks/bodegaElemento/useBodegaElementos";
import { useBodegas } from "../hooks/Bodegas/useBodegas";
import { useFichas } from "../hooks/Ficha/useFicha";
import { useMunicipios } from "../hooks/Municipios/useMunicipios";
import { useProgramas } from "../hooks/Programas/useProgramas";
import { useRoles } from "../hooks/Roles/useRoles";

import { useSedes } from "../hooks/Sedes/useSedes";

import { Elemento } from "../types/Elementos/Elemento";
import { BodegaElemento } from "../types/bodegaElemento/BodegaElemento";

export default function GesTableUserPage() {

  const { areas, isLoading: isLoadingAreas, isError: isErrorAreas } = useAreas();
  const {
    registros: bodegaElementos,
    isLoading: isLoadingBodegaElementos,
    isError: isErrorBodegaElementos
  } = useBodegaElementos();
  const {
    registros: bodegasData, 
    isLoading: isLoadingBodegas,
    isError: isErrorBodegas
  } = useBodegas();
  const { 
    fichas, 
    isLoading: isLoadingFichas, 
    isError: isErrorFichas 
  } = useFichas();
  const {
    municipios,
    isLoading: isLoadingMunicipios,
    isError: isErrorMunicipios
  } = useMunicipios();
  const {
    programas,
    isLoading: isLoadingProgramas,
    isError: isErrorProgramas
  } = useProgramas();
  const {
    roles,
    isLoading: isLoadingRoles,
    isError: isErrorRoles
  } = useRoles();
  

  const {
    sedes,
    isLoading: isLoadingSedes,
    isError: isErrorSedes
  } = useSedes();

  
  if (isLoadingAreas || isLoadingBodegaElementos || isLoadingBodegas || isLoadingFichas || isLoadingMunicipios || isLoadingProgramas || isLoadingRoles || isLoadingSedes) {
    return <div>Cargando datos...</div>;
  }
  
  if (isErrorAreas || isErrorBodegaElementos || isErrorBodegas || isErrorFichas || isErrorMunicipios || isErrorProgramas || isErrorRoles || isErrorSedes) {
    console.error("Error al cargar datos desde la API");
    return <div>Error: No se pudieron cargar todos los datos.</div>;
  }
  
  const elementosParaLaTabla: Elemento[] = bodegaElementos.map(
    (bodegaElemento: BodegaElemento) => bodegaElemento.fkIdElemento
  );

  return (
    <>
      <GesTablesUser
        areasData={areas}
        bodegaElementosData={elementosParaLaTabla}
        bodegasData={bodegasData}
        fichasData={fichas}
        municipiosData={municipios}
        programasData={programas}
        rolesData={roles}
        sedesData={sedes}
      />
    </>
  );
}