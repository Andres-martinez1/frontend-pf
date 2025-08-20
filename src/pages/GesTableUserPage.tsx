
import GesTablesUser from "../components/atomic/templates/GesTablesUser";


import { useAreas } from '../hooks/Areas/useAreas'; 



export default function GesTableUserPage() {

  const { areas, isLoading, isError } = useAreas();


  if (isLoading) {
    
    return <div>Cargando datos...</div>;
  }


  if (isError) {
    return <div>Error: No se pudieron cargar las áreas.</div>;
  }

 
  return (
    <>
      <GesTablesUser areasData={areas} />
    </>
  );
}