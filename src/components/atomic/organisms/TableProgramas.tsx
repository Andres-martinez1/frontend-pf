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
import { Programa } from "../../../types/Programas/Programa";
import EliminarItemContent from "./Eliminar";
import FormPostPrograma from "./FormPostPrograma";
import FormEditPrograma from "./FormEditPrograma";
import { useProgramas } from "../../../hooks/Programas/useProgramas";

type ProgramasTableProps = {
  titulo: string;
  data: Programa[];
};

export default function ProgramasTable({ titulo, data }: ProgramasTableProps) {
  const columns = ["ID", "Nombre Programa", "Acciones"];
  const [searchTerm, setSearchTerm] = useState("");
  const { crearPrograma, actualizarPrograma, eliminarPrograma } = useProgramas();

  const createFormRef = useRef<any>(null);
  const editFormRef = useRef<any>(null);

  const filteredProgramas = searchTerm
    ? data.filter(
        (programa) =>
          programa.idPrograma.toString().includes(searchTerm) ||
          programa.nombrePrograma.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  const handleCreatePrograma = (nuevoPrograma: Omit<Programa, "idPrograma">) => {
    crearPrograma.mutate(nuevoPrograma);
  };

  const handleUpdatePrograma = (programaActualizado: Programa) => {
    actualizarPrograma.mutate({
      id: programaActualizado.idPrograma,
      data: { nombrePrograma: programaActualizado.nombrePrograma },
    });
  };

  const handleDeletePrograma = (idPrograma: number) => {
    eliminarPrograma.mutate(idPrograma);
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>
      <div className="flex justify-between items-center mb-4">
        {/* 🔍 Barra de búsqueda */}
        <div className="relative w-full max-w-md">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <CustomInput
            label="Buscar Programa..."
            type="text"
            width="100%"
            className="pl-12 pr-4 py-2 rounded-xl border border-gray-300 bg-white shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* ➕ Crear nuevo programa */}
        <CustomModal
          title="Crear Nuevo Programa"
          ButtonLabel="Nuevo Programa"
          icon={<Plus className="w-5 h-5" />}
          size="xl"
          content={<FormPostPrograma ref={createFormRef} onFormSubmit={handleCreatePrograma} />}
          cancelLabel="Cancelar"
          confirmLabel="Guardar Programa"
          cancelBgColor="gray"
          confirmBgColor="#1A1A36"
          cancelTextColor="white"
          confirmTextColor="white"
          radius="sm"
          backdrop="opaque"
          placement="center"
          shadow="sm"
          isLoading={crearPrograma.isPending}
          onConfirm={() => createFormRef.current?.submitForm()} scrollBehavior={"normal"}        />
      </div>

      <div className="overflow-x-auto">
        <Table aria-label="Tabla de Programas" removeWrapper>
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
            {filteredProgramas.map((programa) => (
              <TableRow
                key={programa.idPrograma}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{programa.idPrograma}</TableCell>
                <TableCell>{programa.nombrePrograma}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/* ✏️ Editar */}
                    <CustomModal
                      title="Editar Programa"
                      size="xl"
                      trigger={<Tooltip content="Editar Programa">
                        <PencilIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer border rounded-md p-1" />
                      </Tooltip>}
                      content={<FormEditPrograma
                        ref={editFormRef}
                        programaAEditar={programa}
                        onFormSubmit={handleUpdatePrograma}
                        isLoading={actualizarPrograma.isPending} />}
                      cancelLabel="Cancelar"
                      confirmLabel="Guardar Cambios"
                      cancelBgColor="gray"
                      confirmBgColor="#1A1A36"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      radius="sm"
                      backdrop="opaque"
                      placement="center"
                      shadow="sm"
                      isLoading={actualizarPrograma.isPending}
                      onConfirm={() => editFormRef.current?.submitForm()} scrollBehavior={"normal"}                    />

                    {/* 🗑 Eliminar */}
                    <CustomModal
                      title="Confirmar Eliminación"
                      size="md"
                      confirmLabel="Eliminar"
                      cancelLabel="Cancelar"
                      onConfirm={() => handleDeletePrograma(programa.idPrograma)}
                      trigger={<Tooltip content="Eliminar Programa">
                        <Trash2 className="w-6 h-6 text-gray-500 hover:text-red-600 cursor-pointer border rounded-md p-1" />
                      </Tooltip>}
                      content={<EliminarItemContent
                        entityLabel="Programa"
                        itemName={programa.nombrePrograma}
                        itemId={programa.idPrograma}
                        category="programas"
                        warningMessage="Se perderán todos los datos asociados a este programa." />}
                      cancelBgColor=""
                      confirmBgColor="#FF1F22"
                      cancelTextColor=""
                      confirmTextColor="white"
                      radius="sm"
                      backdrop="opaque"
                      placement="center"
                      shadow="sm" scrollBehavior={"normal"}                    />
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
