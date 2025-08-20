import GesTablesUser from "../components/atomic/templates/GesTablesUser";
import { useAreas } from '../hooks/Areas/useAreas';

export default function GesTableUserPage() {
  // ✅ Obtienes los datos correctamente del backend con tu hook
  const { areas, isLoading, isError } = useAreas();

  // ✅ Manejas los estados de carga y error perfectamente
  if (isLoading) {
    return <div>Cargando datos...</div>;
  }

  if (isError) {
    // Para un mejor diagnóstico, podrías mostrar el error en la consola
    console.error("Error al cargar las áreas desde la API");
    return <div>Error: No se pudieron cargar las áreas.</div>;
  }

  // 🔴 CORRECCIÓN:
  // Aquí pasamos los datos 'areas' (que vienen de la API)
  // al componente GesTablesUser a través de la prop 'areasData'.
  return (
    <>
      <GesTablesUser areasData={areas} />
    </>
  );
}