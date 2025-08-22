import { useState } from "react";
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
import { Area } from "../../../types/Areas/Area";
import EliminarItemContent from "./Eliminar";
import FormPostArea from "./FormPostArea";
import FormEditArea from "./FormEditArea";
import { useAreas } from "../../../hooks/Areas/useAreas";
import { useRef } from "react";

type AreasTableProps = {
  titulo: string;
  data: Area[];
  sedes?: { idSedes: number; nombreSede: string }[];
};

export default function AreasTable({
  titulo,
  data,
  sedes = [],
}: AreasTableProps) {
  const columns = ["ID", "Nombre Área", "Sede", "Acciones"];
  const [searchTerm, setSearchTerm] = useState("");
  const { crearArea, actualizarArea, eliminarArea } = useAreas();
  const formRef = useRef<any>(null);

  const filteredAreas = searchTerm
    ? data.filter(
        (area) =>
          area.idArea.toString().includes(searchTerm) ||
          area.nombreArea.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  const handleCreateArea = (nuevaArea: Omit<Area, "idArea">) => {
    const dataParaApi = {
      nombreArea: nuevaArea.nombreArea,
      sedeId: nuevaArea.fkIdSedes.idSedes,
    };
    crearArea.mutate(dataParaApi);
  };

  const handleUpdateArea = (areaActualizada: Area) => {
    const dataParaApi = {
      nombreArea: areaActualizada.nombreArea,
      sedeId: areaActualizada.fkIdSedes.idSedes,
    };
    actualizarArea.mutate({ id: areaActualizada.idArea, data: dataParaApi });
  };

  const handleDeleteArea = (idAreaToDelete: number) => {
    eliminarArea.mutate(idAreaToDelete);
  };
  const editFormRef = useRef<any>(null);

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>
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
          title="Crear Nueva Área"
          ButtonLabel="Nueva Área"
          icon={<Plus className="w-5 h-5" />}
          size="2xl"
          content={
            <FormPostArea
              ref={formRef}
              sedesDisponibles={sedes}
              onFormSubmit={handleCreateArea}
            />
          }
          cancelLabel="Cancelar"
          confirmLabel="Guardar Área"
          cancelBgColor="gray"
          confirmBgColor="#1A1A36"
          cancelTextColor="white"
          confirmTextColor="white"
          radius="sm"
          backdrop="opaque"
          placement="center"
          scrollBehavior="normal"
          shadow="sm"
          isLoading={crearArea.isPending}
          onConfirm={() => formRef.current?.submitForm()}
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
            {filteredAreas.map((area) => (
              <TableRow
                key={area.idArea}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{area.idArea}</TableCell>
                <TableCell>{area.nombreArea}</TableCell>
                <TableCell>{area.fkIdSedes.nombreSede}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CustomModal
                      title="Editar Área"
                      size="2xl"
                      trigger={
                        <Tooltip content="Editar Área">
                          <PencilIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer border rounded-md p-1" />
                        </Tooltip>
                      }
                      content={
                        <FormEditArea
                          ref={editFormRef}
                          areaAEditar={area}
                          sedesDisponibles={sedes}
                          onFormSubmit={handleUpdateArea}
                          isLoading={actualizarArea.isPending}
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
                      isLoading={actualizarArea.isPending}
                      onConfirm={() => editFormRef.current?.submitForm()}
                    />
                    <CustomModal
                      title="Confirmar Eliminación"
                      size="md"
                      confirmLabel="Eliminar"
                      cancelLabel="Cancelar"
                      onConfirm={() => handleDeleteArea(area.idArea)}
                      trigger={
                        <Tooltip content="Eliminar Área">
                          <Trash2 className="w-6 h-6 text-gray-500 hover:text-red-600 cursor-pointer border rounded-md p-1" />
                        </Tooltip>
                      }
                      content={
                        <EliminarItemContent
                          entityLabel="Área"
                          itemName={area.nombreArea}
                          itemId={area.idArea}
                          category="areas"
                          warningMessage="Se perderán todos los datos asociados a esta área."
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
