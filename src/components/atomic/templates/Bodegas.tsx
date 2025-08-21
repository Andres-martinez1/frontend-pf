"use client";

import { useState } from "react";
import { InboxStackIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  ServerIcon,
  TruckIcon,
  UtensilsIcon,
  FactoryIcon,
  BoxesIcon,
  CpuIcon,
} from "lucide-react";

import CardTitulo from "../organisms/CardTitulo";
import BarraBusqueda from "../molecules/BarraBusqueda";
import CustomModal from "../molecules/Modal";
import CardBodega from "../organisms/CardBodega";
import CustomPagination from "../molecules/Pagination";

// --- 1. IMPORTA EL FORMULARIO CORRECTO ---
// Se elimina la importación de 'FormBodega' que no existe.
import FormularioCrearBodega from "../organisms/FormularioCrearBodega";

// Tus datos de ejemplo se mantienen intactos
const bodegasData = [
  {
    titlecard: "TIC",
    description:
      "Servidores, equipos de red y sistemas de almacenamiento para la infraestructura tecnológica.",
    encargado: "Diego Calderon",
    items: 245,
    estado: "Activo",
    estadoColor: "green",
    ubicacion: "Chinchiná - Centro Principal",
    ultimaActualizacion: "Hace 2 horas",
    ocupacion: "78% ocupado",
    ocupacionColor: "#FEF3C7",
    image:
      "https://images.unsplash.com/photo-1581090700227-4c4d1b45f3c2?ixlib=rb-4.0.3&q=80&w=1080&fit=crop",
    icon: <ServerIcon className="w-6 h-6 text-gray-700" />,
  },
  // ... (el resto de tus datos de ejemplo permanecen aquí)
  {
    titlecard: "Electrónica",
    description: "Componentes y equipos electrónicos en stock.",
    encargado: "Andrea Gómez",
    items: 200,
    estado: "Activo",
    estadoColor: "green",
    ubicacion: "Cali - Parque Tecnológico",
    ultimaActualizacion: "Hace 4 horas",
    ocupacion: "85% ocupado",
    ocupacionColor: "#FDE68A",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=80&w=1080&fit=crop",
    icon: <CpuIcon className="w-6 h-6 text-gray-700" />,
  },
];

const ITEMS_PER_PAGE = 6;

export default function Bodegas() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(bodegasData.length / ITEMS_PER_PAGE);
  const bodegasPage = bodegasData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <>
      {/* Encabezado (sin cambios) */}
      <CardTitulo
        title="Bodegas"
        description="Gestión y control de las diferentes áreas de almacenamiento"
        icon={<InboxStackIcon className="w-6 h-6 text-gray-700" />}
        iconBgColor="bg-gray-100"
      />

      <div className="p-6 space-y-6 max-w-screen-xl mx-auto">
        {/* 🔹 Contenedor superior (con la corrección) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <BarraBusqueda />

          <CustomModal
            // --- 2. USA EL FORMULARIO CORRECTO AQUÍ ---
            // Se reemplaza <FormBodega /> por <FormularioCrearBodega />
            content={<FormularioCrearBodega
              // Como estamos usando datos de ejemplo, pasamos arrays vacíos
              // para que el formulario no se rompa.
              sedesDisponibles={[]}
              usuariosDisponibles={[]}
              onFormSubmit={(data) => console.log("Formulario enviado:", data)}
              onCancel={() => { } } />}
            title="Agregar Bodega"
            cancelLabel="" // Dejamos que el formulario maneje sus propios botones
            confirmLabel=""
            ButtonLabel="Agregar Bodega"
            size="2xl" // Aumentado el tamaño para que el formulario quepa mejor
            radius="lg"
            backdrop="opaque"
            placement="center"
            scrollBehavior="inside"
            shadow="lg"
            icon={<PlusCircleIcon className="w-6 h-6" />} cancelBgColor={""} confirmBgColor={""} cancelTextColor={""} confirmTextColor={""}          />
        </div>

        {/* 🔹 Grid de Bodegas (sin cambios) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bodegasPage.map((bodega, idx) => (
            <CardBodega key={idx} {...bodega} />
          ))}
        </div>

        {/* 🔹 Paginación (sin cambios) */}
        <div className="flex justify-end mt-6">
          <CustomPagination
            total={totalPages}
            page={page}
            onChange={(newPage: number) => setPage(newPage)}
          />
        </div>
      </div>
    </>
  );
}