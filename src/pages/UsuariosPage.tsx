import Usuarios from "../components/atomic/templates/Usuarios";
import { useUsuarios } from "../hooks/Usuarios/useUsuarios"; // 1. Importa el hook de usuarios

export default function UsuariosPage() {
  // 2. Llama al hook para obtener los datos y los estados de la petición
  const { usuarios, isLoading, isError } = useUsuarios();

  // 3. Muestra un mensaje de carga mientras se obtienen los datos
  if (isLoading) {
    return <div className="p-6 text-center">Cargando usuarios...</div>;
  }

  // 4. Muestra un mensaje de error si la petición falla
  if (isError) {
    return <div className="p-6 text-center text-red-600">Error al cargar los usuarios.</div>;
  }

  // 5. Si todo está correcto, renderiza el template y le pasa los datos obtenidos
  return (
    <>
      <Usuarios usuariosData={usuarios} />
    </>
  );
}