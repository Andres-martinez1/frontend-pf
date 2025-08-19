"use client";

import { useState } from "react";
import { LayoutGrid, List} from "lucide-react";

import CardProductDetail from "../organisms/CardProduct";
import CustomPagination from "../molecules/Pagination";
import CustomChip from "../atoms/Chip";
import CustomModal from "../molecules/Modal";
import FormProducto from "../organisms/FormProduc";
import { PlusIcon, RectangleGroupIcon } from "@heroicons/react/16/solid";
import BarraBusqueda from "../molecules/BarraBusqueda";
import CardTitulo from "../organisms/CardTitulo";

const mockProducts = [
  {
    titlecard: "Laptop Lenovo Ideapad 3",
    image: "/src/assets/images/carousel/cofi.jpg",
    description:
      "Laptop con procesador Ryzen 5, 8GB gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggRAM y 256GB SSD.",
    contenchip: "Tecnología",
    stock: 8,
  },
  {
    titlecard: "Proyector Epson X05",
    image: "/src/assets/images/carousel/multi.jpg",
    description: "Proyector de alta resolución, ideal para aulas y oficinas.",
    contenchip: "Audiovisual",
    stock: 3,
  },
  {
    titlecard: "Silla Ergonómica",
    image: "/src/assets/images/carousel/cel.jpg",
    description:
      "Silla con soporte lumbar, diseño ergonómico y altura ajustable.",
    contenchip: "Mobiliario",
    stock: 15,
  },
  {
    titlecard: "Impresora HP LaserJet",
    image: "/src/assets/images/carousel/cel.jpg",
    description: "Impresora láser monocromática con Wi-Fi.",
    contenchip: "Tecnología",
    stock: 6,
  },
  {
    titlecard: "Monitor LG 24''",
    image: "/src/assets/images/carousel/cel.jpg",
    description: "Monitor LED Full HD para oficina o hogar.",
    contenchip: "Tecnología",
    stock: 12,
  },
  {
    titlecard: "Cámara Logitech C920",
    image: "/src/assets/images/carousel/cel.jpg",
    description: "Cámara web Full HD ideal para videoconferencias.",
    contenchip: "Audiovisual",
    stock: 5,
  },
  {
    titlecard: "lllll",
    image: "/src/assets/images/logo.png",
    description: "Mesa amplia para salas de juntas.",
    contenchip: "Mobiliario",
    stock: 2,
  },
  {
    titlecard: "lllll",
    image: "/src/assets/images/logo.png",
    description: "Mesa amplia para salas de juntas.",
    contenchip: "Mobiliario",
    stock: 2,
  },
  {
    titlecard: "lllll",
    image: "/src/assets/images/logo.png",
    description: "Mesa amplia para salas de juntas.",
    contenchip: "Mobiliario",
    stock: 2,
  },
  {
    titlecard: "lllll",
    image: "/src/assets/images/logo.png",
    description: "Mesa amplia para salas de juntas.",
    contenchip: "Mobiliario",
    stock: 2,
  },
  {
    titlecard: "lllll",
    image: "/src/assets/images/logo.png",
    description: "Mesa amplia para salas de juntas.",
    contenchip: "Mobiliario",
    stock: 2,
  },
  {
    titlecard: "lllll",
    image: "/src/assets/images/logo.png",
    description: "Mesa amplia para salas de juntas.",
    contenchip: "Mobiliario",
    stock: 2,
  },
  {
    titlecard: "EJEMPLO",
    image: "/src/assets/images/senaLogo.png",
    description: "Mesa amplia para salas de juntas.",
    contenchip: "Mobiliario",
    stock: 2,
  },
];

const ITEMS_PER_PAGE = 6;

export default function ProductCatalog() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(mockProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = mockProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

return (
<>
  <CardTitulo
      title="Productos"
      description="Gestión de inventario y préstamos de equipos"
      icon={<RectangleGroupIcon className="w-6 h-6 text-gray-700" />}
      iconBgColor="bg-gray-100"
    />
  <div className="p-6 space-y-6 max-w-screen-xl mx-auto">
    

    {/* 🔹 Contenedor superior con barra búsqueda a la izquierda y botones a la derecha */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <BarraBusqueda />

      <div className="flex items-center gap-3">
        <LayoutGrid
          className={`h-6 w-6 cursor-pointer ${
            view === "grid" ? "text-blue-600" : "text-gray-400"
          }`}
          onClick={() => setView("grid")}
        />
        <List
          className={`h-6 w-6 cursor-pointer ${
            view === "list" ? "text-blue-600" : "text-gray-400"
          }`}
          onClick={() => setView("list")}
        />
        <CustomModal
          content={<FormProducto />}
          title="Agregar Nuevo Producto"
          cancelLabel="Cancelar"
          confirmLabel="Guardar Producto"
          ButtonLabel="Agregar Producto"
          BgColor="#0F172A"
          cancelBgColor="#F4F1F1"
          confirmBgColor="#131928"
          cancelTextColor="black"
          confirmTextColor="white"
          textColor="white"
          size="2xl"
          radius="lg"
          backdrop="opaque"
          placement="center"
          scrollBehavior="inside"
          shadow="lg"
          icon={<PlusIcon className="h-5 w-5" />}
        />
      </div>
    </div>

    {/* 🔹 Chips siempre debajo del bloque de búsqueda + botones */}
    <div className="flex items-center gap-3">
      <CustomChip conten="Tecnología" color="#E0F7FA" texcolor="#00796B" />
      <CustomChip conten="Audiovisual" color="#FFECB3" texcolor="#FF6F00" />
      <CustomChip conten="Mobiliario" color="#E1BEE7" texcolor="#6A1B9A" />
    </div>

    {/* 🔹 Productos */}
    <div
      className={
        view === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-4"
      }
    >
      {paginatedProducts.map((product, index) => (
        <CardProductDetail
          key={index}
          {...product}
          classNameCard={
            view === "grid" ? "w-full" : "w-full flex flex-row gap-4"
          }
          imageHeight={view === "grid" ? "220px" : "160px"}
        />
      ))}
    </div>

    {/* 🔹 Paginación */}
    <div className="flex justify-end mt-6">
      <CustomPagination total={totalPages} page={page} onChange={setPage} />
    </div>
  </div>
  </>
);

}
