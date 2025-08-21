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
import BarraBusqueda from "../molecules/BarraBusqueda";
import { Municipio } from "../../../types/Municipios/Municipio";
import FormMunicipio from "./FormMunicipio";
import EliminarItemContent from "./Eliminar";

type MunicipioTableProps = {
  titulo: string;
  data: Municipio[];
};

export default function MunicipioTable({ titulo, data }: MunicipioTableProps) {
  const columns = ["ID", "Nombre Municipio", "Centros", "Fichas", "Acciones"];

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      <div className="flex justify-between items-center mb-4">
        <BarraBusqueda />
        <CustomModal
          content={<FormMunicipio></FormMunicipio>}
          title="Nuevo Municipio"
          ButtonLabel="Nuevo Municipio"
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

      <div className="overflow-x-auto">
        <Table aria-label="Tabla de Municipios" removeWrapper>
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
            {data.map((municipio) => (
              <TableRow
                key={municipio.idMunicipio}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{municipio.idMunicipio}</TableCell>

                <TableCell>{municipio.nombreMunicipio}</TableCell>

                <TableCell>
                  {municipio.centros && municipio.centros.length > 0 ? (
                    <ul>
                      {municipio.centros.map((c) => (
                        <li key={c.idCentro}>{c.nombreCentro}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin Centros</span>
                  )}
                </TableCell>

                <TableCell>
                  {municipio.fichas && municipio.fichas.length > 0 ? (
                    <ul>
                      {municipio.fichas.map((f) => (
                        <li key={f.idFicha}>{f.numeroFicha}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin Fichas</span>
                  )}
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
                          codigoSolicitud="ssss"
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

                    <CustomModal
                      content={
                        <EliminarItemContent
                          entityLabel="Municipio"
                          itemName={municipio.nombreMunicipio}
                          itemId={municipio.idMunicipio}
                          category="municipios"
                          warningMessage="Se perderán todos los datos asociados a este municipio."
                          withComment
                          onSuccess={() =>
                            console.log("Municipio eliminado correctamente")
                          }
                        />
                      }
                      title="Eliminar Municipio"
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
