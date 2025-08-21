import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { Plus, PencilIcon, Trash2 } from "lucide-react";
import CustomModal from "../molecules/Modal";
import BarraBusqueda from "../molecules/BarraBusqueda";
import { Area } from "../../../types/Areas/Area";
import FormArea from "./FormArea";
import EliminarItemContent from "./Eliminar";

type AreasTableProps = {
  titulo: string;
  data: Area[];
};

export default function AreasTable({ titulo, data }: AreasTableProps) {
  const columns = ["ID", "Nombre Área", "Sede", "Usuario", "Acciones"];

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      <div className="flex justify-between items-center mb-4">
        <BarraBusqueda />

        <CustomModal
          content={<FormArea></FormArea>}
          title="Nueva Área"
          ButtonLabel="Nueva Área"
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
        <Table aria-label="Tabla de Áreas" removeWrapper>
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
            {data.map((area) => (
              <TableRow
                key={area.idArea}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{area.idArea}</TableCell>
                <TableCell>{area.nombreArea}</TableCell>
                <TableCell>{area.fkIdSedes.nombreSede}</TableCell>
                <TableCell>
                  {area.usuarios && area.usuarios.length > 0 ? (
                    <ul>
                      {area.usuarios.map((u) => (
                        <li key={u.idUsuario}>
                          {u.nombres} {u.apellidos}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin usuario</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CustomModal
                      content={<FormArea />}
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
                        <Tooltip content="Actualizar">
                          <PencilIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md" />
                        </Tooltip>
                      }
                    />

                    <CustomModal
                      content={
                        <EliminarItemContent
                          itemName={area.nombreArea}
                          warningMessage="Se perderán todos los datos asociados a esta área."
                          entityLabel="Área"
                          itemId={area.idArea}
                          category="areas"
                        />
                      }
                      title="Eliminar Área"
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
                        <Tooltip content="Eliminar">
                          <Trash2 className="w-6 h-6 text-gray-500 hover:text-blue-600 border rounded-md" />
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
