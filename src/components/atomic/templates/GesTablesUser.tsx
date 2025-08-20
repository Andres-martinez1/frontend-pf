import { Users, Package, FileText, Shield, Lock, RefreshCw, Book, Building, Grid, Layers, MapPin, Menu, Warehouse, MapIcon, ClipboardIcon } from "lucide-react";
import CardTable from "../organisms/CardTable";
import CardTitulo from "../organisms/CardTitulo";
import { CircleStackIcon } from "@heroicons/react/16/solid";
import CustomChip from "../atoms/Chip";

const GesTablesUser = () => {
const tablas = [
  {
    titulo: "Áreas",
    descripcion: "Gestión de áreas del sistema",
    categoria: "areas",
    registros: 15,
    icon: <Grid size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Áreas</h4>
        <p className="text-sm text-gray-600">
          Administra las diferentes áreas vinculadas a las sedes.
        </p>
      </div>
    ),
  },
  {
    titulo: "Bodega_Elemento",
    descripcion: "Relación entre bodegas y elementos",
    categoria: "bodega-elemento",
    registros: 300,
    icon: <Layers size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Bodega_Elemento</h4>
        <p className="text-sm text-gray-600">
          Control del stock actual y mínimo de cada elemento en cada bodega.
        </p>
      </div>
    ),
  },
  {
    titulo: "Bodegas",
    descripcion: "Gestión de bodegas y almacenamiento",
    categoria: "bodegas",
    registros: 10,
    icon: <Warehouse size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Bodegas</h4>
        <p className="text-sm text-gray-600">
          Control de bodegas, capacidad, imágenes y responsables.
        </p>
      </div>
    ),
  },
  {
    titulo: "Centros",
    descripcion: "Gestión de centros educativos o de trabajo",
    categoria: "centros",
    registros: 8,
    icon: <Building size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Centros</h4>
        <p className="text-sm text-gray-600">
          Administración de centros vinculados a municipios.
        </p>
      </div>
    ),
  },
  {
    titulo: "Elementos",
    descripcion: "Inventario de productos o recursos",
    categoria: "elementos",
    registros: 120,
    icon: <Package size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Elementos</h4>
        <p className="text-sm text-gray-600">
          Gestión de productos con detalles de clasificación, marca y estado.
        </p>
      </div>
    ),
  },
  {
    titulo: "Fichas",
    descripcion: "Gestión de fichas de programas",
    categoria: "ficha",
    registros: 60,
    icon: <ClipboardIcon size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Fichas</h4>
        <p className="text-sm text-gray-600">
          Registro de fichas por programas y sedes.
        </p>
      </div>
    ),
  },
  {
    titulo: "Modulos",
    descripcion: "Gestión de módulos del sistema",
    categoria: "modulos",
    registros: 25,
    icon: <Layers size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Modulos</h4>
        <p className="text-sm text-gray-600">
          Administración de módulos y su relación con opciones y permisos.
        </p>
      </div>
    ),
  },
  {
    titulo: "Movimientos",
    descripcion: "Registro de movimientos de inventario",
    categoria: "movimientos",
    registros: 450,
    icon: <RefreshCw size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Movimientos</h4>
        <p className="text-sm text-gray-600">
          Control de ingresos, salidas y mantenimientos de los elementos.
        </p>
      </div>
    ),
  },
  {
    titulo: "Municipios",
    descripcion: "Gestión de municipios",
    categoria: "municipio",
    registros: 40,
    icon: <MapIcon size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Municipios</h4>
        <p className="text-sm text-gray-600">
          Registro y vinculación de municipios con centros y fichas.
        </p>
      </div>
    ),
  },
  {
    titulo: "Opciones",
    descripcion: "Gestión de opciones de módulos",
    categoria: "opciones",
    registros: 60,
    icon: <Menu size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Opciones</h4>
        <p className="text-sm text-gray-600">
          Configuración de rutas y opciones de los diferentes módulos.
        </p>
      </div>
    ),
  },
  {
    titulo: "Permisos",
    descripcion: "Asignación de permisos",
    categoria: "permisos",
    registros: 35,
    icon: <Lock size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Permisos</h4>
        <p className="text-sm text-gray-600">
          Configuración de accesos y permisos por usuario.
        </p>
      </div>
    ),
  },
  {
    titulo: "Programas",
    descripcion: "Gestión de programas",
    categoria: "programas",
    registros: 20,
    icon: <Book size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Programas</h4>
        <p className="text-sm text-gray-600">
          Registro de programas y sus fichas asociadas.
        </p>
      </div>
    ),
  },
  {
    titulo: "Roles",
    descripcion: "Control de roles y permisos",
    categoria: "roles",
    registros: 12,
    icon: <Shield size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Roles</h4>
        <p className="text-sm text-gray-600">
          Definición y asignación de roles en la aplicación.
        </p>
      </div>
    ),
  },
  {
    titulo: "Sedes",
    descripcion: "Gestión de sedes",
    categoria: "sedes",
    registros: 5,
    icon: <MapPin size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Sedes</h4>
        <p className="text-sm text-gray-600">
          Control de sedes y su vinculación con centros.
        </p>
      </div>
    ),
  },
  {
    titulo: "Solicitudes",
    descripcion: "Gestión de solicitudes de usuarios",
    categoria: "solicitudes",
    registros: 80,
    icon: <FileText size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Solicitudes</h4>
        <p className="text-sm text-gray-600">
          Control de solicitudes pendientes, aprobadas o rechazadas.
        </p>
      </div>
    ),
  },
  {
    titulo: "Usuario_Bodega",
    descripcion: "Relación entre usuarios y bodegas",
    categoria: "usuario_bodega",
    registros: 50,
    icon: <Users size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Usuario_Bodega</h4>
        <p className="text-sm text-gray-600">
          Gestión de asignaciones de usuarios a bodegas específicas.
        </p>
      </div>
    ),
  },
  {
    titulo: "Usuario_Ficha",
    descripcion: "Relación entre usuarios y fichas",
    categoria: "usuario_ficha",
    registros: 45,
    icon: <Users size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Usuario_Ficha</h4>
        <p className="text-sm text-gray-600">
          Control de usuarios asignados a fichas de programas.
        </p>
      </div>
    ),
  },
  {
    titulo: "Usuarios",
    descripcion: "Gestión de usuarios del sistema",
    categoria: "usuarios",
    registros: 156,
    icon: <Users size={20} />,
    modalContent: (
      <div>
        <h4 className="font-semibold mb-2">Usuarios</h4>
        <p className="text-sm text-gray-600">
          Administra usuarios, áreas, roles y permisos.
        </p>
      </div>
    ),
  },
];


  return (
    <>
      <CardTitulo
        title="Gestión de Tablas de Base de Datos"
        description="Acceso directo a todas las tablas del sistema"
        icon={<CircleStackIcon className="w-6 h-6 text-gray-700" />}
        iconBgColor="bg-gray-100"
      />

      <div className="flex justify-between items-center p-6">
        <CustomChip
          conten={`${tablas.length} Tablas disponibles`}
          color="#E8F0FC"
          texcolor="#1C6CE3"
          className="ml-auto border border-blue-700 font-semibold"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {tablas.map((tabla, index) => (
          <CardTable
            key={index}
            icon={tabla.icon}
            titulo={tabla.titulo}
            registros={tabla.registros}
            descripcion={tabla.descripcion}
            categoria={tabla.categoria}
            modalContent={tabla.modalContent}
          />
        ))}
      </div>
    </>
  );
};


export default GesTablesUser;
