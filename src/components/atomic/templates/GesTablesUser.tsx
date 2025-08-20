import { Grid, Warehouse } from "lucide-react";
import CardTable from "../organisms/CardTable";
import CardTitulo from "../organisms/CardTitulo";
import { CircleStackIcon } from "@heroicons/react/16/solid";
import CustomChip from "../atoms/Chip";
import AreasTable from "../organisms/TableAreas";
import { Area } from "../../../types/Areas/Area";
import BodegasTable from "../organisms/Tablebodegas";


interface GesTablesUserProps {
  areasData: Area[];
  
}

const GesTablesUser = ({ areasData }: GesTablesUserProps) => {
  
  
  const bodegasData: (string | number)[][] = [
    [1, "Bodega Central", "TIC", "https://picsum.photos/80", 500, "Bodega principal de insumos TIC", "20 elementos", "Sede Norte", "Carlos Rodríguez", "Admin"],
    [2, "Bodega de Gastronomía", "Gastronomía", "https://picsum.photos/81", 200, "Insumos cocina y repostería", "45 elementos", "Sede Centro", "Ana Martínez", "Operador"],
    [3, "Bodega Agro", "Agropecuaria", "https://picsum.photos/82", 800, "Bodega de semillas y fertilizantes", "60 elementos", "Sede Sur", "Lucía Torres", "Supervisor"],
  ];

  const tablas = [
    {
      titulo: "Áreas",
      descripcion: "Gestión de áreas del sistema",
      categoria: "areas",
      // 4. Se usa la longitud del array recibido por props.
      registros: areasData.length,
      icon: <Grid size={20} />,
      modalContent: (
        // 5. Se pasan los datos reales al componente de tabla.
        <AreasTable titulo="Tabla de Áreas" data={areasData} />
      ),
    },
    {
      titulo: "Bodegas",
      descripcion: "Gestión de bodegas y almacenamiento",
      categoria: "bodegas",
      registros: bodegasData.length, // Usando datos falsos temporalmente
      icon: <Warehouse size={20} />,
      modalContent: <BodegasTable titulo="Tabla de Bodegas" data={bodegasData} />,
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