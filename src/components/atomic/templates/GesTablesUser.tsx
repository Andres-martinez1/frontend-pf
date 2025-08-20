import { Grid, Warehouse, Landmark, Boxes } from "lucide-react";
import CardTable from "../organisms/CardTable";
import CardTitulo from "../organisms/CardTitulo";
import { CircleStackIcon } from "@heroicons/react/16/solid";
import CustomChip from "../atoms/Chip";
import AreasTable from "../organisms/TableAreas";
import { Area } from "../../../types/Areas/Area";
import { Bodega } from "../../../types/Bodegas/Bodega";
import BodegasTable from "../organisms/Tablebodegas";
import { Centro } from "../../../types/Centros/Centro";
import CentrosTable from "../organisms/TableCentros";
import { Elemento } from "../../../types/Elementos/Elemento";
import ElementosTable from "../organisms/TableElementos";
import { Ficha } from "../../../types/Ficha/Ficha";
import FichasTable from "../organisms/TableFichas";
import MunicipioTable from "../organisms/TableMunicipio";
import { Municipio } from "../../../types/Municipios/Municipio";
import ProgramasTable from "../organisms/TableProgramas";
import { Programa } from "../../../types/Programas/Programa";
import RolesTable from "../organisms/TableRoles";
import { Rol } from "../../../types/Roles/Rol";
import SedesTable from "../organisms/TableSedes"; // ✅ importa la tabla de sedes
import { Sede } from "../../../types/Sedes/Sede";

const GesTablesUser = () => {
  // 🔹 Datos de prueba Áreas
  const sedesData: Sede[] = [
    {
      idSedes: 1,
      nombreSede: "Sede Norte",
      fkIdCentro: { idCentro: 1, nombreCentro: "Centro Tecnológico" },
      areas: [
        { idArea: 1, nombreArea: "TIC" },
        { idArea: 2, nombreArea: "Electrónica" },
      ],
      bodegases: [{ idBodega: 1, nombreBodega: "Bodega Central" }],
      fichas: [
        { idFicha: 1, nombreFicha: "Ficha 101" },
        { idFicha: 2, nombreFicha: "Ficha 102" },
      ],
    },
    {
      idSedes: 2,
      nombreSede: "Sede Centro",
      fkIdCentro: { idCentro: 2, nombreCentro: "Centro Gastronómico" },
      areas: [],
      bodegases: [],
      fichas: [],
    },
  ];
  const rolesData: Rol[] = [
    {
      idRol: 1,
      nombreRol: "Administrador",
      permisos: [
        { idPermiso: 1, nombrePermiso: "Gestionar Usuarios" },
        { idPermiso: 2, nombrePermiso: "Ver Reportes" },
      ],
      usuarios: [
        { idUsuario: 1, nombre: "Andrés" },
        { idUsuario: 2, nombre: "María" },
      ],
    },
    {
      idRol: 2,
      nombreRol: "Instructor",
      permisos: [{ idPermiso: 3, nombrePermiso: "Gestionar Fichas" }],
      usuarios: [{ idUsuario: 3, nombre: "Carlos" }],
    },
  ];

  const areasData: Area[] = [
    {
      idArea: 1,
      nombreArea: "TIC",
      fkIdSedes: { idSedes: 1, nombreSede: "Sede Norte" },
      usuarios: [
        { idUsuario: 1, nombres: "María", apellidos: "García" },
        { idUsuario: 2, nombres: "Carlos", apellidos: "Rodríguez" },
      ],
    },
    {
      idArea: 2,
      nombreArea: "Agropecuaria",
      fkIdSedes: { idSedes: 2, nombreSede: "Sede Centro" },
      usuarios: [{ idUsuario: 3, nombres: "Ana", apellidos: "Martínez" }],
    },
  ];
  // 🔹 Datos de prueba Municipios
  const municipiosData: Municipio[] = [
    {
      idMunicipio: 1,
      nombreMunicipio: "Bogotá",
      centros: [
        { idCentro: 1, nombreCentro: "Centro Tecnológico" },
        { idCentro: 2, nombreCentro: "Centro de Innovación" },
      ],
      fichas: [
        { idFicha: 1, numeroFicha: "12345" },
        { idFicha: 2, numeroFicha: "67890" },
      ],
    },
    {
      idMunicipio: 2,
      nombreMunicipio: "Medellín",
      centros: [{ idCentro: 3, nombreCentro: "Centro Gastronómico" }],
      fichas: [],
    },
  ];

  // 🔹 Datos de prueba Bodegas
  const bodegasData: Bodega[] = [
    {
      idBodega: 1,
      nombreBodega: "Bodega Central",
      img: "https://picsum.photos/80",
      capacidadMaxima: 500,
      descripcion: "Bodega principal de insumos TIC",
      fkIdSede: {
        idSedes: 1,
        nombreSede: "Sede Norte",
        fkIdCentro: { idCentro: 1, nombreCentro: "Centro Tecnológico" },
      },
      fkIdUsuario: {
        idUsuario: 2,
        nombres: "Carlos",
        apellidos: "Rodríguez",
        identificacion: "",
        correo: "",
      },
      bodegaElementos: [],
      usuarioBodegas: [],
    },
  ];

  // 🔹 Datos de prueba Centros
  const centrosData: Centro[] = [
    {
      idCentro: 1,
      nombreCentro: "Centro Tecnológico",
      municipio: "Bogotá",
      sede: { idSede: 1, nombreSede: "Sede Norte" },
      fkIdMunicipio: {
        idMunicipio: 0,
        nombreMunicipio: "",
      },
    },
    {
      idCentro: 2,
      nombreCentro: "Centro Gastronómico",
      municipio: "Medellín",
      sede: { idSede: 2, nombreSede: "Sede Centro" },
      fkIdMunicipio: {
        idMunicipio: 0,
        nombreMunicipio: "",
      },
    },
  ];

  // 🔹 Datos de prueba Elementos
  const elementosData: Elemento[] = [
    {
      idElemento: 1,
      nombreElemento: "Laptop Dell XPS",
      clasificacion: "Tecnología",
      numeroDeSerie: "ABC12345",
      uso: "Administrativo",
      estado: "Disponible",
      tipo: "Portátil",
      marca: "Dell",
      img: "https://picsum.photos/60",
      unidadDeMedida: "Unidad",
      descripcion: "Laptop de alto rendimiento para oficina",
      fechaVencimiento: null,
      bodegaElementos: [
        {
          idBodegaElemento: 1,
          cantidad: 10,
          fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" },
        },
      ],
    },
    {
      idElemento: 2,
      nombreElemento: "Proyector Epson",
      clasificacion: "Audiovisual",
      numeroDeSerie: "XYZ67890",
      uso: "Docencia",
      estado: "En uso",
      tipo: "Proyector",
      marca: "Epson",
      img: "https://picsum.photos/61",
      unidadDeMedida: "Unidad",
      descripcion: "Proyector para clases y conferencias",
      fechaVencimiento: null,
      bodegaElementos: [
        {
          idBodegaElemento: 2,
          cantidad: 5,
          fkIdBodega: { idBodega: 2, nombreBodega: "Bodega de Gastronomía" },
        },
      ],
    },
  ];

  // 🔹 Datos de prueba Fichas
  const fichasData: Ficha[] = [
    {
      idFicha: 1,
      numeroFicha: "12345",
      fkIdMunicipio: { idMunicipio: 1, nombreMunicipio: "Bogotá" },
      fkIdPrograma: { idPrograma: 1, nombrePrograma: "Ingeniería de Software" },
      fkIdSede: { idSedes: 1, nombreSede: "Sede Norte" },
      usuarioFichas: [
        { idUsuarioFicha: 1, nombres: "Laura", apellidos: "Ramírez" },
        { idUsuarioFicha: 2, nombres: "Juan", apellidos: "Pérez" },
      ],
    },
    {
      idFicha: 2,
      numeroFicha: "67890",
      fkIdMunicipio: { idMunicipio: 2, nombreMunicipio: "Medellín" },
      fkIdPrograma: { idPrograma: 2, nombrePrograma: "Gastronomía" },
      fkIdSede: { idSedes: 2, nombreSede: "Sede Centro" },
      usuarioFichas: [],
    },
  ];

  const programasData: Programa[] = [
    {
      idPrograma: 1,
      nombrePrograma: "Tecnología en Sistemas",
      fichas: [
        { idFicha: 101, numeroFicha: "F12345" },
        { idFicha: 102, numeroFicha: "F67890" },
      ],
    },
    {
      idPrograma: 2,
      nombrePrograma: "Gastronomía",
      fichas: [{ idFicha: 201, numeroFicha: "F54321" }],
    },
    {
      idPrograma: 3,
      nombrePrograma: "Agropecuaria",
      fichas: [],
    },
  ];

  // 🔹 Configuración de las tablas
  const tablas = [
    {
      titulo: "Áreas",
      descripcion: "Gestión de áreas del sistema",
      categoria: "areas",
      registros: areasData.length,
      icon: <Grid size={20} />,
      modalContent: <AreasTable titulo="Tabla de Áreas" data={areasData} />,
    },
    {
      titulo: "Bodegas",
      descripcion: "Gestión de bodegas y almacenamiento",
      categoria: "bodegas",
      registros: bodegasData.length,
      icon: <Warehouse size={20} />,
      modalContent: (
        <BodegasTable titulo="Tabla de Bodegas" data={bodegasData} />
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
      registros: elementosData.length,
      icon: <Boxes size={20} />,
      modalContent: (
        <ElementosTable titulo="Tabla de Elementos" data={elementosData} />
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
      icon: <Landmark size={20} />, // puedes usar otro ícono si quieres diferenciarlo
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
      icon: <Landmark size={20} />, // o cualquier otro ícono que prefieras
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
