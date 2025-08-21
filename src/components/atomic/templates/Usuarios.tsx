import BarraBusqueda from "../molecules/BarraBusqueda";
import CustomModal from "../molecules/Modal";
import CardTitulo from "../organisms/CardTitulo";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import CustomTableUser from "../organisms/UsuariosTable";
import CreateUser from "../organisms/CreateUsuarioContent";
import {
  UserCircle2,
  Building,
  Package,
  Layers,
  MapPin,
  BookOpen,
  ClipboardList,
  UserPlus,
} from "lucide-react";
import { Usuario } from "../../../types/Usuarios/Usuario";

// Define la interfaz para las props que el componente recibirá
interface UsuariosProps {
  usuariosData: Usuario[];
}

const Usuarios = ({ usuariosData }: UsuariosProps) => {
  const modulos = [
    { id: "usuarios", nombre: "Usuarios", descripcion: "Gestión de usuarios del sistema" },
    { id: "roles", nombre: "Roles", descripcion: "Roles y permisos de usuario", icon: <UserCircle2 className="text-indigo-950" /> },
    { id: "bodegas", nombre: "Bodegas", descripcion: "Gestión de bodegas y almacenes", icon: <Building className="text-indigo-600" /> },
    { id: "productos", nombre: "Productos", descripcion: "Inventario y control de productos", icon: <Package className="text-green-600" /> },
    { id: "areas", nombre: "Áreas", descripcion: "Gestión de áreas dentro de la organización", icon: <Layers className="text-blue-600" /> },
    { id: "municipios", nombre: "Municipios", descripcion: "Administración de municipios y ubicaciones", icon: <MapPin className="text-red-600" /> },
    { id: "programas", nombre: "Programas", descripcion: "Gestión de programas de formación", icon: <BookOpen className="text-orange-600" /> },
    { id: "fichas", nombre: "Fichas", descripcion: "Control de fichas de formación", icon: <ClipboardList className="text-teal-600" /> },
  ];

  return (
    <>
      <CardTitulo
        title="Gestión de Usuarios"
        description="Administre los usuarios del sistema"
        icon={<UserGroupIcon className="w-6 h-6 text-gray-700" />}
        iconBgColor="bg-gray-100"
      />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6 p-6">
        <div className="flex-1">
          <BarraBusqueda />
        </div>

        <div className="flex flex-wrap gap-2">
          {/* Este modal de creación funciona de forma autónoma, lo cual es correcto en tu estructura */}
          <CustomModal
            content={<CreateUser modulos={modulos} />}
            title="Crear Usuario"
            cancelLabel="Cancelar"
            confirmLabel="Guardar"
            cancelBgColor="gray"
            confirmBgColor="#1A1A36"
            cancelTextColor="white"
            confirmTextColor="white"
            ButtonLabel="Nuevo Usuario"
            size={"3xl"}
            radius={"lg"}
            backdrop={"opaque"}
            placement={"center"}
            scrollBehavior={"inside"}
            shadow={"sm"}
            icon={<UserPlus className="w-4 h-4"></UserPlus>}
          />
        </div>
      </div>
      
      {/* Pasa los datos de las props (`usuariosData`) a la tabla, que se encargará del resto */}
      <div className="p-6">
        <CustomTableUser titulo="Usuarios del sistema" data={usuariosData} />
      </div>
    </>
  );
};

export default Usuarios;