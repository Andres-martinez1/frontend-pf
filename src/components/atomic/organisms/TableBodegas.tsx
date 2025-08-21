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
import FormBodega from "./FormBodega";
import { Bodega } from "../../../types/Bodegas/Bodega";
import EliminarItemContent from "./Eliminar";

type BodegasTableProps = {
  titulo: string;
  data: Bodega[];
};

export default function BodegasTable({ titulo, data }: BodegasTableProps) {
  const columns = [
    "ID",
    "Nombre Bodega",
    "Img",
    "Capacidad Máxima",
    "Descripción",
    "Bodega Elementos",
    "Sede",
    "Usuario Responsable",
    "Usuarios Bodega",
    "Acciones",
  ];

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      <div className="flex justify-between items-center mb-4">
        <BarraBusqueda />

        <CustomModal
          content={<FormBodega />}
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
            {data.map((bodega) => (
              <TableRow
                key={bodega.idBodega}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{bodega.idBodega}</TableCell>
                <TableCell>{bodega.nombreBodega}</TableCell>
                <TableCell>
                  {bodega.img ? (
                    <img
                      src={bodega.img}
                      alt={bodega.nombreBodega}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  ) : (
                    "Sin imagen"
                  )}
                </TableCell>
                <TableCell>{bodega.capacidadMaxima ?? "Sin definir"}</TableCell>
                <TableCell>{bodega.descripcion ?? "Sin descripción"}</TableCell>
                <TableCell>{bodega.bodegaElementos.length} elementos</TableCell>
                <TableCell>
                  {bodega.fkIdSede?.nombreSede ?? "Sin sede"}
                </TableCell>
                <TableCell>
                  {bodega.fkIdUsuario
                    ? `${bodega.fkIdUsuario.nombres} ${bodega.fkIdUsuario.apellidos}`
                    : "Sin asignar"}
                </TableCell>
                <TableCell>
                  {bodega.usuarioBodegas.length > 0
                    ? bodega.usuarioBodegas.map((ub) => ub.rol).join(", ")
                    : "Sin usuarios"}
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
                            nombre: bodega.nombreBodega,
                            categoria: bodega.fkIdSede?.nombreSede ?? "",
                          }}
                          fechaSolicitud="14/1/2024"
                          fechaDevolucion="21/1/2024"
                          estado="Pendiente"
                          prioridad="Alta"
                          motivo={bodega.descripcion ?? ""}
                          comentarios="Detalle ficticio"
                          codigoSolicitud={`BODEGA-${bodega.idBodega}`}
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

                    <CustomModal
                      content={
                        <EliminarItemContent
                          entityLabel="Bodega"
                          itemName={bodega.nombreBodega}
                          itemId={bodega.idBodega}
                          category="bodegas"
                          warningMessage="Se perderán todos los datos asociados a esta bodega."
                          withComment
                          onSuccess={() =>
                            console.log("Bodega eliminada correctamente")
                          }
                        />
                      }
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
