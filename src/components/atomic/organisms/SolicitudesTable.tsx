import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { EyeIcon, CheckIcon, XIcon, Clock, CheckCircle, XCircle } from "lucide-react";
import CustomModal from "../molecules/Modal";
import FormSoli from "./SolicitudDetalle";
import AprobarSolicitudContent from "./AprobarSolicitudContent";
import RechazarSolicitudContent from "./RechazarSolicitudContent";

type SolicitudesTableProps = {
  titulo: string;
  data: (string | number)[][];
};

export default function SolicitudesTable({
  titulo,
  data,
}: SolicitudesTableProps) {
  const columns = [
    "ID",
    "Usuario",
    "Producto",
    "Categoría",
    "Fecha",
    "Estado",
    "Prioridad",
    "Acciones",
  ];

  const categoriaClasses: Record<string, string> = {
    TIC: "bg-blue-100 text-blue-700 w-[100px]  border-1 border-blue-400",
    Gastronomía: "bg-orange-100 text-orange-700 w-[100px] border-1 border-orange-400",
    Agropecuaria: "bg-green-100 text-green-700 w-[100px] border-1 border-green-400",
    Logística: "bg-purple-200 text-purple-700 w-[100px] border-1 border-purple-400",
  };

  const estadoClasses: Record<string, string> = {
    Pendiente: "bg-yellow-100 text-yellow-700 gap-2 w-[100px] border-1 border-orange-400",
    Aprobada: "bg-green-100 text-green-700 gap-2 w-[100px] border-1 border-green-400",
    Rechazada: "bg-red-100 text-red-700 gap-2 w-[100px] border-1 border-red-400",
  };

  const estadoIcons: Record<string, JSX.Element> = {
    Pendiente: <Clock className="w-4 h-4 text-yellow-500 " />,
    Aprobada: <CheckCircle className="w-4 h-4 text-green-500 " />,
    Rechazada: <XCircle className="w-4 h-4 text-red-500 " />,
  };

  const prioridadClasses: Record<string, string> = {
    Alta: "bg-red-100 text-red-700 border-1 border-red-400 ",
    Media: "bg-yellow-100 text-yellow-700 border-1 border-yellow-400 ",
    Baja: "bg-gray-200 text-gray-700 border-1 border-gray-400 ",
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>
      <div className="overflow-x-auto">
        <Table aria-label="Tabla de solicitudes" removeWrapper>
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
                  <div className="text-sm text-gray-500">{row[2]}</div>
                </TableCell>
                <TableCell>{row[3]}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${
                      categoriaClasses[row[4] as string] ||
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {row[4]}
                  </span>
                </TableCell>
                <TableCell>{row[5]}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${
                      estadoClasses[row[6] as string] ||
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {estadoIcons[row[6] as string]}
                    {row[6]}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      prioridadClasses[row[7] as string] ||
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {row[7]}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
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
                      title="Detalle de Solicitud"
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
                        <Tooltip content="Ver detalles">
                          <EyeIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md" />
                        </Tooltip>
                      }
                    />

                    <CustomModal
                      content={
                        <AprobarSolicitudContent codigoSolicitud="ssss" />
                      }
                      title="Aprobar Solicitud"
                      cancelLabel="Cancelar"
                      confirmLabel="Aprobar"
                      ButtonLabel=""
                      BgColor="transparent"
                      cancelBgColor="gray"
                      confirmBgColor="#068500"
                      bordeconfirm="#044700"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      size="sm"
                      radius="lg"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="inside"
                      shadow="lg"
                      trigger={
                        <Tooltip content="Aprobar">
                          <CheckIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md" />
                        </Tooltip>
                      }
                    />

                    <CustomModal
                      content={
                        <RechazarSolicitudContent codigoSolicitud="ssss" />
                      }
                      title="Rechazar Solicitud"
                      cancelLabel="Cancelar"
                      confirmLabel="Rechazar"
                      ButtonLabel=""
                      BgColor="transparent"
                      cancelBgColor="gray"
                      confirmBgColor="#D1190F"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      bordeconfirm="#6E0D08"
                      size="sm"
                      radius="lg"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="inside"
                      shadow="lg"
                      trigger={
                        <Tooltip content="Rechazar">
                          <XIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md" />
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
