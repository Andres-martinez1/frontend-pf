import GesTablesUser from "../components/atomic/templates/GesTablesUser";
import { useAreas } from '../hooks/Areas/useAreas';
import { useBodegaElementos } from "../hooks/bodegaElemento/useBodegaElementos";
import { useBodegas } from "../hooks/Bodegas/useBodegas";
// ✅ NUEVO: 1. Importamos el hook para los Centros
import { useCentros } from "../hooks/Centros/useCentros";

// Importa los tipos que necesitas
import { Elemento } from "../types/Elementos/Elemento";
import { BodegaElemento } from "../types/bodegaElemento/BodegaElemento";

export default function GesTableUserPage() {
  // Hook para Áreas
  const { areas, isLoading: isLoadingAreas, isError: isErrorAreas } = useAreas();

  // Hook para Bodega-Elementos
  const {
    registros: bodegaElementos,
    isLoading: isLoadingBodegaElementos,
    isError: isErrorBodegaElementos
  } = useBodegaElementos();

  // Hook para Bodegas
  const {
    registros: bodegasData,
    isLoading: isLoadingBodegas,
    isError: isErrorBodegas
  } = useBodegas();

  // ✅ NUEVO: 2. Obtenemos los datos de los Centros
  const {
    centros: centrosData, // El hook ya devuelve una propiedad 'centros'
    isLoading: isLoadingCentros,
    isError: isErrorCentros
  } = useCentros();

  // ✅ CORRECCIÓN: 3. Combinamos TODOS los estados de carga
  if (isLoadingAreas || isLoadingBodegaElementos || isLoadingBodegas || isLoadingCentros) {
    return <div>Cargando datos...</div>;
  }

  // ✅ CORRECCIÓN: 4. Combinamos TODOS los estados de error
  if (isErrorAreas || isErrorBodegaElementos || isErrorBodegas || isErrorCentros) {
    console.error("Error al cargar datos desde la API");
    return <div>Error: No se pudieron cargar todos los datos.</div>;
  }

  // Transformación de datos para la tabla de Elementos (se mantiene igual)
  const elementosParaLaTabla: Elemento[] = bodegaElementos.map(
    (bodegaElemento: BodegaElemento) => bodegaElemento.fkIdElemento
  );

  // ✅ CORRECCIÓN: 5. Pasamos los cuatro conjuntos de datos al componente de presentación
  return (
    <>
      <GesTablesUser
        areasData={areas}
        bodegaElementosData={elementosParaLaTabla}
        bodegasData={bodegasData}
        centrosData={centrosData}
      />
    </>
  );
}