// /components/tables/AreasTable.tsx

import React, { useState, useEffect } from "react";
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

// --- Se importan todas las moléculas y componentes necesarios ---
import CustomModal from "../molecules/Modal";
import FormSoli from "./SolicitudDetalle";
import AprobarSolicitudContent from "./AprobarSolicitudContent";
import BarraBusqueda from "../molecules/BarraBusqueda";
import { Area } from "../../../types/Areas/Area"; 
import FormArea from "./FormArea";
import EliminarItemContent from "./Eliminar";
import FormPostArea from "./FormPostArea";
import FormEditArea from "./FormEditArea";

type AreasTableProps = {
  titulo: string;
  data: Area[];
  // SOLUCIÓN: Hacemos que la prop 'sedes' sea opcional y le damos un valor por defecto
  sedes?: { idSedes: number, nombreSede: string }[];
};

// Se aplica el valor por defecto aquí
export default function AreasTable({ titulo, data, sedes = [] }: AreasTableProps) {
  const columns = ["ID", "Nombre Área", "Sede", "Usuario", "Acciones"];

  const [allAreas, setAllAreas] = useState<Area[]>(data);
  const [filteredAreas, setFilteredAreas] = useState<Area[]>(data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setAllAreas(data);
  }, [data]);
  
  useEffect(() => {
    const result = searchTerm
      ? allAreas.filter(
          (area) =>
            area.idArea.toString().includes(searchTerm) ||
            area.nombreArea.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allAreas;
    setFilteredAreas(result);
  }, [searchTerm, allAreas]);

  // --- LÓGICA CRUD ---
  const handleCreateArea = (nuevaArea: Omit<Area, "idArea">) => {
    const areaConId: Area = { ...nuevaArea, idArea: Date.now() };
    setAllAreas(prevAreas => [...prevAreas, areaConId]);
  };

  const handleUpdateArea = (areaActualizada: Area) => {
    setAllAreas(prevAreas =>
      prevAreas.map((area) =>
        area.idArea === areaActualizada.idArea ? areaActualizada : area
      )
    );
  };

  const handleDeleteArea = (idAreaToDelete: number) => {
    setAllAreas(prevAreas => prevAreas.filter((area) => area.idArea !== idAreaToDelete));
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      <div className="flex justify-between items-center mb-4">
        {/* Barra de Búsqueda recreada para controlarla desde la tabla */}
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

        {/* Modal de Creación con su propio botón de activación */}
        <CustomModal
          title="Crear Nueva Área"
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
          icon={ <Plus className="w-5 h-5" />}
          
        />
      </div>

      <div className="overflow-x-auto">
        <Table aria-label="Tabla de Áreas" removeWrapper>
          <TableHeader>
            {columns.map((col, index) => (
              <TableColumn key={index} className="bg-gray-800 text-white px-4 py-2 text-left">{col}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {filteredAreas.map((area) => (
              <TableRow key={area.idArea} className="hover:bg-gray-100 transition-colors duration-200">
                <TableCell>{area.idArea}</TableCell>
                <TableCell>{area.nombreArea}</TableCell>
                <TableCell>{area.fkIdSedes.nombreSede}</TableCell>
                <TableCell>
                  {area.usuarios?.map((u) => `${u.nombres} ${u.apellidos}`).join(", ") || (
                    <span className="text-gray-400">Sin usuario</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/* Modal Detalle */}
                    <CustomModal
                      content={
                        <FormArea
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
                        <Tooltip content="Eliminar Área">
                          <Trash2 className="w-6 h-6 text-gray-500 hover:text-red-600 cursor-pointer border rounded-md p-1" />
                        </Tooltip>
                      }
                    />

                    {/* Modal Aprobar */}
                    <CustomModal
                      content={
                        <EliminarItemContent
  title="Area"
  itemName="Juan Pérez"
  warningMessage="Se perderán todos los datos asociados a la area."
/> 
                      }
                      title="Eliminar Area"
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