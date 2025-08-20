import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { EyeIcon, CheckIcon, Plus } from "lucide-react";
import CustomModal from "../molecules/Modal";
import FormSoli from "./SolicitudDetalle";
import AprobarSolicitudContent from "./AprobarSolicitudContent";
import BarraBusqueda from "../molecules/BarraBusqueda";
import FormBodega from "./FormBodega";

type BodegasTableProps = {
  titulo: string;
  data: (string | number)[][];
};

export default function BodegasTable({ titulo, data }: BodegasTableProps) {
  const columns = [
    "ID",
    "Nombre Bodega",
    "Img",
    "Capacidad Maxima",
    "Descripcion",
    "Bodega Elementos",
    "Sede",
    "Usuario",
    "Usuario Bodega",
    "Acciones",
  ];

  const bodegaClasses: Record<string, string> = {
    TIC: "bg-blue-100 text-blue-700 w-[100px] border-1 border-blue-400",
    Gastronomía:
      "bg-orange-100 text-orange-700 w-[100px] border-1 border-orange-400",
    Agropecuaria:
      "bg-green-100 text-green-700 w-[100px] border-1 border-green-400",
    Logística:
      "bg-purple-200 text-purple-700 w-[100px] border-1 border-purple-400",
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      {/* 🔹 Barra de búsqueda + Botón Nueva Bodega */}
      <div className="flex justify-between items-center mb-4">
        <BarraBusqueda />

        <CustomModal
          content={<FormBodega open={false} onClose={function (): void {
            throw new Error("Function not implemented.");
          } }></FormBodega>}
          title="Nueva Bodega"
          ButtonLabel="Nueva Bodega"
          cancelLabel="Cancelar"
          confirmLabel="Guardar"
          cancelBgColor="gray"
          confirmBgColor="#1A1A36"
          cancelTextColor="white"
          confirmTextColor="white"
          size="xl"
          radius="lg"
          backdrop="opaque"
          placement="center"
          scrollBehavior="inside"
          shadow="lg"
          icon={<Plus className="w-5 h-5" />}
        />
      </div>

      {/* 🔹 Tabla */}
      <div className="overflow-x-auto">
        <Table aria-label="Tabla de Bodegas" removeWrapper>
          <TableHeader>
            {columns.map((col, index) => (
              <TableColumn
                key={index}
                className="bg-gray-800 text-white px-4 py-2 text-left"
              >
                {col}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{row[0]}</TableCell>
                <TableCell>
                  <div className="font-semibold">{row[1]}</div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${
                      bodegaClasses[row[2] as string] ||
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {row[2]}
                  </span>
                </TableCell>
                <TableCell>{row[3]}</TableCell>
                <TableCell>{row[4]}</TableCell>
                <TableCell>{row[5]}</TableCell>
                <TableCell>{row[6]}</TableCell>
                <TableCell>{row[7]}</TableCell>
                <TableCell>{row[8]}</TableCell>
                <TableCell>{row[9]}</TableCell>

                {/* 🔹 Acciones */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/* Modal Ver Detalle */}
                    <CustomModal
                      content={
                        <FormSoli
                          usuario={{
                            nombre: "Andres",
                            correo: "maria.garcia@empresa.com",
                          }}
                          producto={{
                            nombre: "Laptop UltraBook Pro",
                            categoria: "TIC",
                          }}
                          fechaSolicitud="14/1/2024"
                          fechaDevolucion="21/1/2024"
                          estado="Pendiente"
                          prioridad="Alta"
                          motivo="Presentación cliente importante"
                          comentarios="Necesito urgentemente para presentación con cliente el viernes."
                          codigoSolicitud={"ssss"}
                        />
                      }
                      title="Detalle de Bodega"
                      cancelLabel=""
                      confirmLabel="Cerrar"
                      ButtonLabel=""
                      BgColor="transparent"
                      cancelBgColor=""
                      confirmBgColor="#1A1A36"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      size="4xl"
                      radius="lg"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="inside"
                      shadow="lg"
                      trigger={
                        <Tooltip content="Ver Detalle">
                          <EyeIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md" />
                        </Tooltip>
                      }
                    />

                    {/* Modal Eliminar */}
                    <CustomModal
                      content={<AprobarSolicitudContent codigoSolicitud="ssss" />}
                      title="Eliminar Bodega"
                      cancelLabel="Cancelar"
                      confirmLabel="Eliminar"
                      ButtonLabel=""
                      BgColor="transparent"
                      cancelBgColor="gray"
                      confirmBgColor="#d32f2f"
                      bordeconfirm="#a10f0f"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      size="sm"
                      radius="lg"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="inside"
                      shadow="lg"
                      trigger={
                        <Tooltip content="Eliminar">
                          <CheckIcon className="w-6 h-6 text-gray-500 hover:text-red-600 border rounded-md" />
                        </Tooltip>
                      }
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
