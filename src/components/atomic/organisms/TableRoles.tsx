import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { Plus, EyeIcon, CheckIcon } from "lucide-react";
import CustomModal from "../molecules/Modal";
import BarraBusqueda from "../molecules/BarraBusqueda";
import { Rol } from "../../../types/Roles/Rol"; 
import FormRol from "./FormRol";

type RolesTableProps = {
  titulo: string;
  data: Rol[];
};

export default function RolesTable({ titulo, data }: RolesTableProps) {
  const columns = ["ID", "Nombre Rol", "Permisos", "Usuarios", "Acciones"];

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      {/* 🔹 Barra de búsqueda + botón crear */}
      <div className="flex justify-between items-center mb-4">
        <BarraBusqueda />
        <CustomModal
          content={<FormRol />}
          title="Nuevo Rol"
          ButtonLabel="Nuevo Rol"
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
        <Table aria-label="Tabla de Roles" removeWrapper>
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
            {data.map((rol) => (
              <TableRow
                key={rol.idRol}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{rol.idRol}</TableCell>
                <TableCell>{rol.nombreRol}</TableCell>

                {/* 🔹 Permisos */}
                <TableCell>
                  {rol.permisos && rol.permisos.length > 0 ? (
                    <ul className="list-disc pl-4">
                      {rol.permisos.map((p) => (
                        <li key={p.idPermiso}>{p.nombrePermiso}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin permisos</span>
                  )}
                </TableCell>

                {/* 🔹 Usuarios */}
                <TableCell>
                  {rol.usuarios && rol.usuarios.length > 0 ? (
                    <ul>
                      {rol.usuarios.map((u) => (
                        <li key={u.idUsuario}>{u.nombre}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin usuarios</span>
                  )}
                </TableCell>

                {/* 🔹 Acciones */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CustomModal
                      content={<FormRol/>}
                      title="Detalle Rol"
                      cancelLabel=""
                      confirmLabel="Cerrar"
                      ButtonLabel=""
                      BgColor="transparent"
                      cancelBgColor=""
                      confirmBgColor="#1A1A36"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      size="2xl"
                      radius="lg"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="inside"
                      shadow="lg"
                      trigger={
                        <Tooltip content="Ver / Editar">
                          <EyeIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md" />
                        </Tooltip>
                      }
                    />

                    <CustomModal
                      content={<p>¿Seguro que deseas aprobar/eliminar este rol?</p>}
                      title="Confirmar Acción"
                      cancelLabel="Cancelar"
                      confirmLabel="Confirmar"
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
                        <Tooltip content="Aprobar / Eliminar">
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
