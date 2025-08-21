import { useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { Plus, PencilIcon, Trash2, Search } from "lucide-react";
import CustomModal from "../molecules/Modal";
import CustomInput from "../molecules/Input";
import { Bodega } from "../../../types/Bodegas/Bodega";
import EliminarItemContent from "./Eliminar";
import FormularioCrearBodega from "./FormularioCrearBodega";
import FormularioEditBodega from "./FormularioEditBodega";
import { useBodegas } from "../../../hooks/Bodegas/useBodegas";
import { Sede } from "../../../types/Sedes/Sede";
import { Usuario } from "../../../types/Usuarios/Usuario";

// Define las props que la tabla debe recibir
type BodegasTableProps = {
  titulo: string;
  data: Bodega[];
  sedes: Sede[];
  usuarios: Usuario[]; // Se asegura de recibir la lista de usuarios
};

export default function BodegasTable({ titulo, data, sedes, usuarios }: BodegasTableProps) {
  const columns = ["ID", "Nombre Bodega", "Capacidad", "Sede", "Usuario Responsable", "Acciones"];
  const [searchTerm, setSearchTerm] = useState("");
  const { crear, actualizar, eliminar } = useBodegas();

  const filteredBodegas = searchTerm
    ? data.filter((bodega) =>
        bodega.nombreBodega.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  const handleCreateBodega = (nuevaBodega: any) => {
    crear.mutate(nuevaBodega);
  };

  const handleUpdateBodega = (bodegaActualizada: Bodega) => {
    actualizar.mutate({ id: bodegaActualizada.idBodega, data: bodegaActualizada });
  };

  const handleDeleteBodega = (idBodega: number) => {
    eliminar.mutate(idBodega);
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
            label="Buscar por nombre de bodega..."
            type="text"
            width="100%"
            className="pl-12 pr-4 py-2 rounded-xl border border-gray-300 bg-white shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* --- PUNTO CLAVE: Modal de Creación --- */}
        {/* Aquí se pasan las listas de sedes y usuarios al formulario. ¡Esto está CORRECTO! */}
        <CustomModal
          title="Crear Nueva Bodega"
          ButtonLabel="Nueva Bodega"
          icon={<Plus className="w-5 h-5" />}
          size="2xl"
          content={<FormularioCrearBodega
            sedesDisponibles={sedes}
            usuariosDisponibles={usuarios} // Se pasa la lista de usuarios
            onFormSubmit={handleCreateBodega}
            onCancel={() => { } }
            isLoading={crear.isPending} />} cancelLabel={""} confirmLabel={""} cancelBgColor={""} confirmBgColor={""} cancelTextColor={""} confirmTextColor={""} radius={"sm"} backdrop={"transparent"} placement={"center"} scrollBehavior={"normal"} shadow={"sm"}          // ... resto de props del modal
        />
      </div>

      <div className="overflow-x-auto">
        <Table aria-label="Tabla de Bodegas" removeWrapper>
          <TableHeader>
            {columns.map((col, index) => (
              <TableColumn key={index} className="bg-gray-800 text-white px-4 py-2 text-left">
                {col}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {filteredBodegas.map((bodega) => (
              <TableRow key={bodega.idBodega} className="hover:bg-gray-100 transition-colors duration-200">
                <TableCell>{bodega.idBodega}</TableCell>
                <TableCell>{bodega.nombreBodega}</TableCell>
                <TableCell>{bodega.capacidadMaxima ?? "N/A"}</TableCell>
                <TableCell>{bodega.fkIdSede?.nombreSede ?? "Sin sede"}</TableCell>
                <TableCell>
                  {bodega.fkIdUsuario ? `${bodega.fkIdUsuario.nombres} ${bodega.fkIdUsuario.apellidos}` : "Sin asignar"}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CustomModal
                      title="Editar Bodega"
                      size="2xl"
                      trigger={<Tooltip content="Editar Bodega">
                        <PencilIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer border rounded-md p-1" />
                      </Tooltip>}
                      content={<FormularioEditBodega
                        bodegaAEditar={bodega}
                        sedesDisponibles={sedes}
                        usuariosDisponibles={usuarios} // También se pasa a la edición
                        onFormSubmit={handleUpdateBodega}
                        onCancel={() => { } }
                        isLoading={actualizar.isPending} />} cancelLabel={""} confirmLabel={""} cancelBgColor={""} confirmBgColor={""} cancelTextColor={""} confirmTextColor={""} radius={"sm"} backdrop={"transparent"} placement={"center"} scrollBehavior={"normal"} shadow={"sm"}                      // ... resto de props del modal
                    />
                    <CustomModal
                      title="Confirmar Eliminación"
                      size="md"
                      onConfirm={() => handleDeleteBodega(bodega.idBodega)}
                      trigger={<Tooltip content="Eliminar">
                        <Trash2 className="w-6 h-6 text-gray-500 hover:text-red-600 cursor-pointer border rounded-md p-1" />
                      </Tooltip>}
                      content={<EliminarItemContent
                        itemName={bodega.nombreBodega}
                        warningMessage="Se perderán todos los datos y elementos asociados a esta bodega." entityLabel={""} itemId={0} category={""} />} cancelLabel={""} confirmLabel={""} cancelBgColor={""} confirmBgColor={""} cancelTextColor={""} confirmTextColor={""} radius={"sm"} backdrop={"transparent"} placement={"center"} scrollBehavior={"normal"} shadow={"sm"}                      // ... resto de props del modal
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