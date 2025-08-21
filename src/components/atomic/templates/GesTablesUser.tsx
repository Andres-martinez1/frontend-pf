import { Grid, Warehouse, Landmark, Boxes } from "lucide-react";
import CardTable from "../organisms/CardTable";
import CardTitulo from "../organisms/CardTitulo";
import { CircleStackIcon } from "@heroicons/react/16/solid";
import CustomChip from "../atoms/Chip";

// --- Importaciones de Tipos y Tablas ---
import { Area } from "../../../types/Areas/Area";
import { Bodega } from "../../../types/Bodegas/Bodega";
import { Centro } from "../../../types/Centros/Centro";
import { Elemento } from "../../../types/Elementos/Elemento";
import { Ficha } from "../../../types/Ficha/Ficha";
import { Municipio } from "../../../types/Municipios/Municipio";
import { Programa } from "../../../types/Programas/Programa";
import { Rol } from "../../../types/Roles/Rol";
import { Sede } from "../../../types/Sedes/Sede";
import { Usuario } from "../../../types/Usuarios/Usuario";

import AreasTable from "../organisms/TableAreas";
import BodegasTable from "../organisms/TableBodegas";
import CentrosTable from "../organisms/TableCentros";
import ElementosTable from "../organisms/TableElementos";
import FichasTable from "../organisms/TableFichas";
import MunicipioTable from "../organisms/TableMunicipio";
import ProgramasTable from "../organisms/TableProgramas";
import RolesTable from "../organisms/TableRoles";
import SedesTable from "../organisms/TableSedes";

// --- Tipado de las props del componente ---
interface GesTablesUserProps {
  areasData?: Area[];
  bodegaElementosData?: Elemento[];
  bodegasData?: Bodega[];
  fichasData?: Ficha[];
  municipiosData?: Municipio[];
  programasData?: Programa[];
  rolesData?: Rol[];
  sedesData?: Sede[];
  // --- CORRECCIÓN #1: Se añade la prop para recibir la lista de usuarios ---
  usuariosData?: Usuario[];
}

// --- Componente GesTablesUser ---
const GesTablesUser = ({
  areasData = [],
  bodegaElementosData = [],
  bodegasData = [],
  fichasData = [],
  municipiosData = [],
  programasData = [],
  rolesData = [],
  sedesData = [],
  // Se asigna un array vacío como valor por defecto para seguridad
  usuariosData = [],
}: GesTablesUserProps) => {

  // Simulación de datos para Centros, como en tu ejemplo.
  const centrosData: Centro[] = [];

  // Definición de las tablas que se mostrarán en la interfaz
  const tablas = [
    {
      titulo: "Áreas",
      descripcion: "Gestión de áreas del sistema",
      categoria: "areas",
      registros: areasData.length,
      icon: <Grid size={20} />,
      modalContent: <AreasTable titulo="Tabla de Áreas" data={areasData} sedes={sedesData} />,
    },
    {
      titulo: "Bodegas",
      descripcion: "Gestión de bodegas y almacenamiento",
      categoria: "bodegas",
      registros: bodegasData.length,
      icon: <Warehouse size={20} />,
      /*
       * --- CORRECCIÓN #2: Se pasa la lista de sedes y la lista de usuarios a BodegasTable ---
       * Ahora el componente hijo 'BodegasTable' y sus sub-componentes (los formularios)
       * tendrán acceso a la lista completa de usuarios para renderizar el selector.
       */
      modalContent: (
        <BodegasTable
          titulo="Tabla de Bodegas"
          data={bodegasData}
          sedes={sedesData}
          usuarios={usuariosData} // <-- ¡AQUÍ ESTÁ LA CLAVE!
        />
      ),
    },
    {
      titulo: "Centros",
      descripcion: "Gestión de centros y sedes",
      categoria: "centros",
      registros: centrosData.length,
      icon: <Landmark size={20} />,
      modalContent: (
        <CentrosTable titulo="Tabla de Centros" data={centrosData} />
      ),
    },
    {
      titulo: "Elementos",
      descripcion: "Gestión de elementos y activos",
      categoria: "elementos",
      registros: bodegaElementosData.length,
      icon: <Boxes size={20} />,
      modalContent: (
        <ElementosTable titulo="Tabla de Elementos" data={bodegaElementosData} />
      ),
    },
    {
      titulo: "Fichas",
      descripcion: "Gestión de fichas y programas",
      categoria: "fichas",
      registros: fichasData.length,
      icon: <CircleStackIcon className="w-5 h-5" />,
      modalContent: <FichasTable titulo="Tabla de Fichas" data={fichasData} />,
    },
    {
      titulo: "Municipios",
      descripcion: "Gestión de municipios y sus centros",
      categoria: "municipios",
      registros: municipiosData.length,
      icon: <Landmark size={20} />,
      modalContent: (
        <MunicipioTable titulo="Tabla de Municipios" data={municipiosData} />
      ),
    },
    {
      titulo: "Programas",
      descripcion: "Gestión de programas académicos",
      categoria: "programas",
      registros: programasData.length,
      icon: <CircleStackIcon className="w-5 h-5" />,
      modalContent: (
        <ProgramasTable titulo="Tabla de Programas" data={programasData} />
      ),
    },
    {
      titulo: "Roles",
      descripcion: "Gestión de roles y permisos",
      categoria: "roles",
      registros: rolesData.length,
      icon: <Grid size={20} />,
      modalContent: <RolesTable titulo="Tabla de Roles" data={rolesData} />,
    },
    {
      titulo: "Sedes",
      descripcion: "Gestión de sedes institucionales",
      categoria: "sedes",
      registros: sedesData.length,
      icon: <Landmark size={20} />,
      modalContent: <SedesTable titulo="Tabla de Sedes" data={sedesData} />,
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