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
import EliminarItemContent from "./Eliminar";
import FormPostMunicipio from "./FormPostMunicipio";
import FormEditMunicipio from "./FormEditMunicipio";
import { Municipio } from "../../../types/Municipios/Municipio";
import { useMunicipios } from "../../../hooks/Municipios/useMunicipios";

type MunicipioTableProps = {
  titulo: string;
  data: Municipio[];
};

export default function MunicipioTable({ titulo, data }: MunicipioTableProps) {
  const columns = ["ID", "Nombre Municipio", "Acciones"];
  const [searchTerm, setSearchTerm] = useState("");
  const { crearMunicipio, actualizarMunicipio, eliminarMunicipio } = useMunicipios();
  const formRef = useRef<any>(null);
  const editFormRef = useRef<any>(null);

  // 🔎 Filtrar municipios por ID o nombre
  const filteredMunicipios = searchTerm
    ? data.filter(
        (municipio) =>
          municipio.idMunicipio.toString().includes(searchTerm) ||
          municipio.nombreMunicipio.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  // ➕ Crear municipio
  const handleCreateMunicipio = (nuevoMunicipio: Omit<Municipio, "idMunicipio">) => {
    const dataParaApi = {
      nombreMunicipio: nuevoMunicipio.nombreMunicipio,
    };
    crearMunicipio.mutate(dataParaApi);
  };

  // ✏️ Editar municipio
  const handleUpdateMunicipio = (municipioActualizado: Municipio) => {
    const dataParaApi = {
      nombreMunicipio: municipioActualizado.nombreMunicipio,
    };
    actualizarMunicipio.mutate({ id: municipioActualizado.idMunicipio, data: dataParaApi });
  };

  // 🗑️ Eliminar municipio
  const handleDeleteMunicipio = (idMunicipioToDelete: number) => {
    eliminarMunicipio.mutate(idMunicipioToDelete);
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      {/* Barra de búsqueda + Crear */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-full max-w-md">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <CustomInput
            label="Buscar por ID o Nombre..."
            type="text"
            width="100%"
            className="pl-12 pr-4 py-2 rounded-xl border border-gray-300 bg-white shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <CustomModal
          title="Crear Nuevo Municipio"
          ButtonLabel="Nuevo Municipio"
          icon={<Plus className="w-5 h-5" />}
          size="xl"
          content={
            <FormPostMunicipio ref={formRef} onFormSubmit={handleCreateMunicipio} />
          }
          cancelLabel="Cancelar"
          confirmLabel="Guardar Municipio"
          cancelBgColor="gray"
          confirmBgColor="#1A1A36"
          cancelTextColor="white"
          confirmTextColor="white"
          radius="sm"
          backdrop="opaque"
          placement="center"
          scrollBehavior="normal"
          shadow="sm"
          isLoading={crearMunicipio.isPending}
          onConfirm={() => formRef.current?.submitForm()}
        />
      </div>

      {/* Tabla */}
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
            {filteredMunicipios.map((municipio) => (
              <TableRow
                key={municipio.idMunicipio}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{municipio.idMunicipio}</TableCell>
                <TableCell>{municipio.nombreMunicipio}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/* Editar */}
                    <CustomModal
                      title="Editar Municipio"
                      size="xl"
                      trigger={
                        <Tooltip content="Editar Municipio">
                          <PencilIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer border rounded-md p-1" />
                        </Tooltip>
                      }
                      content={
                        <FormEditMunicipio
                          ref={editFormRef}
                          municipioAEditar={municipio}
                          onFormSubmit={handleUpdateMunicipio}
                          isLoading={actualizarMunicipio.isPending}
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
                      isLoading={actualizarMunicipio.isPending}
                      onConfirm={() => editFormRef.current?.submitForm()}
                    />

                    {/* Eliminar */}
                    <CustomModal
                      title="Confirmar Eliminación"
                      size="md"
                      confirmLabel="Eliminar"
                      cancelLabel="Cancelar"
                      onConfirm={() => handleDeleteMunicipio(municipio.idMunicipio)}
                      trigger={
                        <Tooltip content="Eliminar Municipio">
                          <Trash2 className="w-6 h-6 text-gray-500 hover:text-red-600 cursor-pointer border rounded-md p-1" />
                        </Tooltip>
                      }
                      content={
                        <EliminarItemContent
                          entityLabel="Municipio"
                          itemName={municipio.nombreMunicipio}
                          itemId={municipio.idMunicipio}
                          category="municipios"
                          warningMessage="Se perderán todos los datos asociados a este municipio."
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
