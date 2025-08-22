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
import FormPostBodega, { NuevaBodegaData } from "../organisms/FormPostBodega";
import FormEditBodega from "../organisms/FormEditBodega";
import { Bodega } from "../../../types/Bodegas/Bodega";
import { Sede } from "../../../types/Sedes/Sede";
import { Usuario } from "../../../types/Usuarios/Usuario";
import { useBodegas } from "../../../hooks/Bodegas/useBodegas";
import { BodegaPut } from "../../../types/Bodegas/BodegaPut";

type BodegasTableProps = {
  titulo: string;
  data: Bodega[];
  sedes: Sede[];
  usuarios: Usuario[];
};

export default function BodegasTable({
  titulo,
  data,
  sedes,
  usuarios,
}: BodegasTableProps) {
  const columns = [
    "ID",
    "Nombre Bodega",
    "Imagen",
    "Capacidad Máxima",
    "Descripción",
    "Sede",
    "Usuario Responsable",
    "Acciones",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const { crearBodega, actualizarBodega, eliminarBodega } = useBodegas();
  const formRef = useRef<any>(null);
  const editFormRef = useRef<any>(null);

  const filteredBodegas = searchTerm
    ? data.filter(
        (bodega) =>
          bodega.idBodega.toString().includes(searchTerm) ||
          bodega.nombreBodega.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  const handleCreateBodega = (data: NuevaBodegaData) => {
  const dataParaApi = {
    nombreBodega: data.nombreBodega,
    sedeId: data.fkIdSede.idSedes,
    usuarioId: data.fkIdUsuario.idUsuario,
    img: data.img ?? null,
    capacidadMaxima: data.capacidadMaxima ?? undefined,
    descripcion: data.descripcion ?? undefined,
  };
  crearBodega.mutate(dataParaApi);
};


  const handleUpdateBodega = (bodegaActualizada: Bodega) => {
    const dataParaApi: BodegaPut = {
      nombreBodega: bodegaActualizada.nombreBodega,
      sedeId: bodegaActualizada.fkIdSede.idSedes,
      usuarioId: bodegaActualizada.fkIdUsuario.idUsuario,
      img: bodegaActualizada.img ?? null,
      capacidadMaxima: bodegaActualizada.capacidadMaxima ?? undefined,
      descripcion: bodegaActualizada.descripcion ?? undefined,
    };
    actualizarBodega.mutate({ id: bodegaActualizada.idBodega, data: dataParaApi });
  };

  const handleDeleteBodega = (idBodega: number) => {
    eliminarBodega.mutate(idBodega);
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
            label="Buscar por ID o Nombre..."
            type="text"
            width="100%"
            className="pl-12 pr-4 py-2 rounded-xl border border-gray-300 bg-white shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <CustomModal
          title="Crear Nueva Bodega"
          ButtonLabel="Nueva Bodega"
          icon={<Plus className="w-5 h-5" />}
          size="2xl"
          content={
            <FormPostBodega
              ref={formRef}
              sedesDisponibles={sedes}
              usuariosDisponibles={usuarios}
              onFormSubmit={handleCreateBodega}
            />
          }
          cancelLabel="Cancelar"
          confirmLabel="Guardar Bodega"
          cancelBgColor="gray"
          confirmBgColor="#1A1A36"
          cancelTextColor="white"
          confirmTextColor="white"
          radius="sm"
          backdrop="opaque"
          placement="center"
          scrollBehavior="normal"
          shadow="sm"
          isLoading={crearBodega.isPending}
          onConfirm={() => formRef.current?.submitForm() }
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
            {filteredBodegas.map((bodega) => (
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
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                  ) : (
                    <span className="text-gray-400 italic">Sin imagen</span>
                  )}
                </TableCell>
                <TableCell>{bodega.capacidadMaxima ?? "N/A"}</TableCell>
                <TableCell>{bodega.descripcion ?? "Sin descripción"}</TableCell>
                <TableCell>{bodega.fkIdSede?.nombreSede ?? "N/A"}</TableCell>
                <TableCell>{bodega.fkIdUsuario?.nombreUsuario ?? "N/A"}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CustomModal
                      title="Editar Bodega"
                      size="2xl"
                      trigger={
                        <Tooltip content="Editar Bodega">
                          <PencilIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer border rounded-md p-1" />
                        </Tooltip>
                      }
                      content={
                        <FormEditBodega
                          ref={editFormRef}
                          bodegaAEditar={bodega}
                          sedesDisponibles={sedes}
                          usuariosDisponibles={usuarios}
                          onFormSubmit={handleUpdateBodega}
                          isLoading={actualizarBodega.isPending}
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
                      isLoading={actualizarBodega.isPending}
                      onConfirm={() => editFormRef.current?.submitForm()}
                    />
                    <CustomModal
                      title="Confirmar Eliminación"
                      size="md"
                      confirmLabel="Eliminar"
                      cancelLabel="Cancelar"
                      onConfirm={() => handleDeleteBodega(bodega.idBodega)}
                      trigger={
                        <Tooltip content="Eliminar Bodega">
                          <Trash2 className="w-6 h-6 text-gray-500 hover:text-red-600 cursor-pointer border rounded-md p-1" />
                        </Tooltip>
                      }
                      content={
                        <EliminarItemContent
                          entityLabel="Bodega"
                          itemName={bodega.nombreBodega}
                          itemId={bodega.idBodega}
                          category="bodegas"
                          warningMessage="Se perderán todos los datos asociados a esta bodega."
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
