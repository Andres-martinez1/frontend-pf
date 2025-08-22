import { useState, useRef } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { Plus, PencilIcon, Trash2, Search } from "lucide-react";
import CustomModal from "../molecules/Modal";
import CustomInput from "../molecules/Input";
import { Rol } from "../../../types/Roles/Rol";
import FormEditRol from "./FormEditRol";
import EliminarItemContent from "./Eliminar";
import { useRoles } from "../../../hooks/Roles/useRoles";
import FormPostRol, { FormRolRef } from "./FormPostRol";
import { RolPostData } from "../../../types/Roles/RolPost";

type RolesTableProps = {
  titulo: string;
  data: Rol[];
};

export default function RolesTable({ titulo, data }: RolesTableProps) {
  const columns = ["ID", "Nombre Rol", "Acciones"];
  const [searchTerm, setSearchTerm] = useState("");
  const { crearRol, actualizarRol, eliminarRol } = useRoles();

  const formRef = useRef<FormRolRef>(null);
  const editFormRef = useRef<any>(null);

  const filteredRoles = searchTerm
    ? data.filter(
        (rol) =>
          rol.idRol.toString().includes(searchTerm) ||
          rol.nombreRol.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  const handleCreateRol = (nuevoRol: RolPostData) => {
    crearRol.mutate(nuevoRol);
  };

  const handleUpdateRol = (rolActualizado: RolPostData & { idRol: number }) => {
    actualizarRol.mutate({ id: rolActualizado.idRol, data: rolActualizado });
  };

  const handleDeleteRol = (idRolToDelete: number) => {
    eliminarRol.mutate(idRolToDelete);
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      <div className="flex justify-between items-center mb-4">
        <div className="relative w-full max-w-md">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <CustomInput
            label="Buscar Rol"
            type="text"
            width="100%"
            className="pl-12 pr-4 py-2 rounded-xl border border-gray-300 bg-white shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <CustomModal
          title="Crear Nuevo Rol"
          ButtonLabel="Nuevo Rol"
          icon={<Plus className="w-5 h-5" />}
          size="2xl"
          content={<FormPostRol ref={formRef} onFormSubmit={handleCreateRol} />}
          cancelLabel="Cancelar"
          confirmLabel="Guardar Rol"
          cancelBgColor="gray"
          confirmBgColor="#1A1A36"
          cancelTextColor="white"
          confirmTextColor="white"
          radius="sm"
          backdrop="opaque"
          placement="center"
          scrollBehavior="normal"
          shadow="sm"
          isLoading={crearRol.isPending}
          onConfirm={() => formRef.current?.submitForm()}
        />
      </div>

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
            {filteredRoles.map((rol) => (
              <TableRow
                key={rol.idRol}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{rol.idRol}</TableCell>
                <TableCell>{rol.nombreRol}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CustomModal
                      title="Editar Rol"
                      size="2xl"
                      trigger={
                        <Tooltip content="Editar Rol">
                          <PencilIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer border rounded-md p-1" />
                        </Tooltip>
                      }
                      content={
                        <FormEditRol
                          ref={editFormRef}
                          rolAEditar={rol}
                          onFormSubmit={handleUpdateRol}
                          isLoading={actualizarRol.isPending}
                        />
                      }
                      cancelLabel="Cancelar"
                      confirmLabel="Guardar Cambios"
                      cancelBgColor="gray"
                      confirmBgColor="#1A1A36"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      radius="sm"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="normal"
                      shadow="sm"
                      isLoading={actualizarRol.isPending}
                      onConfirm={() => editFormRef.current?.submitForm()}
                    />

                    <CustomModal
                      title="Confirmar Eliminación"
                      size="md"
                      confirmLabel="Eliminar"
                      cancelLabel="Cancelar"
                      onConfirm={() => handleDeleteRol(rol.idRol)}
                      trigger={
                        <Tooltip content="Eliminar Rol">
                          <Trash2 className="w-6 h-6 text-gray-500 hover:text-red-600 cursor-pointer border rounded-md p-1" />
                        </Tooltip>
                      }
                      content={
                        <EliminarItemContent
                          entityLabel="Rol"
                          itemName={rol.nombreRol}
                          itemId={rol.idRol}
                          category="roles"
                          warningMessage="Se perderán todos los usuarios y permisos asociados a este rol."
                        />
                      }
                      cancelBgColor=""
                      confirmBgColor="#FF1F22"
                      cancelTextColor=""
                      confirmTextColor="white"
                      radius="sm"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="normal"
                      shadow="sm"
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
