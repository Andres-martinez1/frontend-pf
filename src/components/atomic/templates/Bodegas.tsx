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
import FormBodega from "../organisms/FormBodega";

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
  {
    titlecard: "Logística",
    description: "Materiales de embalaje, transporte y distribución de mercancías.",
    encargado: "María López",
    items: 128,
    estado: "Activo",
    estadoColor: "green",
    ubicacion: "Manizales - Zona Industrial",
    ultimaActualizacion: "Hace 5 horas",
    ocupacion: "52% ocupado",
    ocupacionColor: "#DCFCE7",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342cf98a2?ixlib=rb-4.0.3&q=80&w=1080&fit=crop",
    icon: <TruckIcon className="w-6 h-6 text-gray-700" />,
  },
  {
    titlecard: "Gastronomía",
    description:
      "Equipos y utensilios de cocina industrial para el área de gastronomía.",
    encargado: "Carlos Ramírez",
    items: 89,
    estado: "Inactivo",
    estadoColor: "red",
    ubicacion: "Pereira - Campus Gastronómico",
    ultimaActualizacion: "Hace 1 día",
    ocupacion: "91% ocupado",
    ocupacionColor: "#FECACA",
    image:
      "https://images.unsplash.com/photo-1600891963932-9603fe56a6b4?ixlib=rb-4.0.3&q=80&w=1080&fit=crop",
    icon: <UtensilsIcon className="w-6 h-6 text-gray-700" />,
  },
  {
    titlecard: "Manufactura",
    description: "Insumos y repuestos para la planta de producción.",
    encargado: "Laura Mejía",
    items: 310,
    estado: "Activo",
    estadoColor: "green",
    ubicacion: "Medellín - Planta Norte",
    ultimaActualizacion: "Hace 3 horas",
    ocupacion: "63% ocupado",
    ocupacionColor: "#DBEAFE",
    image:
      "https://images.unsplash.com/photo-1566843972142-27f9c2f82e27?ixlib=rb-4.0.3&q=80&w=1080&fit=crop",
    icon: <FactoryIcon className="w-6 h-6 text-gray-700" />,
  },
  {
    titlecard: "Almacén General",
    description: "Materiales diversos para apoyo administrativo.",
    encargado: "Pedro Torres",
    items: 152,
    estado: "Activo",
    estadoColor: "green",
    ubicacion: "Bogotá - Bodega Central",
    ultimaActualizacion: "Hace 1 día",
    ocupacion: "48% ocupado",
    ocupacionColor: "#DCFCE7",
    image:
      "https://images.unsplash.com/photo-1623874001828-2a7b82d49f75?ixlib=rb-4.0.3&q=80&w=1080&fit=crop",
    icon: <BoxesIcon className="w-6 h-6 text-gray-700" />,
  },
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
      {/* Encabezado */}
      <CardTitulo
        title="Bodegas"
        description="Gestión y control de las diferentes áreas de almacenamiento"
        icon={<InboxStackIcon className="w-6 h-6 text-gray-700" />}
        iconBgColor="bg-gray-100"
      />

      <div className="p-6 space-y-6 max-w-screen-xl mx-auto">
        {/* 🔹 Contenedor superior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <BarraBusqueda />

          <CustomModal
            content={<FormBodega />}
            title="Agregar Bodega"
            cancelLabel="Cancelar"
            confirmLabel="Guardar"
            ButtonLabel="Agregar Bodega"
            cancelBgColor="#F4F1F1"
            confirmBgColor="#131928"
            cancelTextColor="black"
            confirmTextColor="white"
            size="lg"
            radius="lg"
            backdrop="opaque"
            placement="center"
            scrollBehavior="inside"
            shadow="lg"
            icon={<PlusCircleIcon className="w-6 h-6" />}
          />
        </div>

        {/* 🔹 Grid de Bodegas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bodegasPage.map((bodega, idx) => (
            <CardBodega key={idx} {...bodega} />
          ))}
        </div>

        {/* 🔹 Paginación */}
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
