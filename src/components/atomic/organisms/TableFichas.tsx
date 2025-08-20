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
import { Ficha } from "../../../types/Ficha/Ficha";
import FormFicha from "./FormFicha";

type FichasTableProps = {
  titulo: string;
  data: Ficha[];
};

export default function FichasTable({ titulo, data }: FichasTableProps) {
  const columns = [
    "ID",
    "Número Ficha",
    "Municipio",
    "Programa",
    "Sede",
    "Usuario Ficha",
    "Acciones",
  ];

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
        <BarraBusqueda />
        {/* Botón para agregar nuevo elemento (puedes conectar a tu FormElemento después) */}
        <CustomModal
          content={<FormFicha></FormFicha>}
          title="Nueva Ficha"
          ButtonLabel="Nueva Ficha"
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

        <Table aria-label="Tabla de Fichas" removeWrapper>
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
            {data.map((ficha) => (
              <TableRow
                key={ficha.idFicha}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{ficha.idFicha}</TableCell>
                <TableCell>{ficha.numeroFicha}</TableCell>
                <TableCell>{ficha.fkIdMunicipio.nombreMunicipio}</TableCell>
                <TableCell>{ficha.fkIdPrograma.nombrePrograma}</TableCell>
                <TableCell>{ficha.fkIdSede.nombreSede}</TableCell>
                <TableCell>
                  {ficha.usuarioFichas && ficha.usuarioFichas.length > 0 ? (
                    <ul>
                      {ficha.usuarioFichas.map((u) => (
                        <li key={u.idUsuarioFicha}>
                          {u.nombres} {u.apellidos}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin usuarios</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/* Modal detalle */}
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
                        <Tooltip content="Ver Detalle">
                          <EyeIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md" />
                        </Tooltip>
                      }
                    />

                    {/* Modal aprobar */}
                    <CustomModal
                      content={<AprobarSolicitudContent codigoSolicitud="ssss" />}
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
                          <CheckIcon className="w-6 h-6 text-gray-500 hover:text-green-600 border rounded-md" />
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
