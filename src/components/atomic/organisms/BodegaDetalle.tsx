import { useState } from "react";
import CardProductDetail from "../organisms/CardProduct";
import { Tabs, Tab } from "@heroui/react";
import CardSoli from "../organisms/CardSoli";
import {
  Package,
  CheckCircle,
  Clock,
  AlertTriangle,
  Phone,
  MapPin,
  Database,
} from "lucide-react";
import BarraBusqueda from "../molecules/BarraBusqueda";

type Encargado = {
  nombre: string;
  cargo: string;
  email: string;
  telefono: string;
};

type DetallesBodega = {
  ubicacion: string;
  fechaCreacion: string;
  ultimaActualizacion: string;
  totalItems: number;
};

type Inventario = {
  total: number;
  disponibles: number;
  prestamo: number;
  stockBajo: number;
  estado: string;
  capacidad: string;
  ultimaAuditoria: string;
};

type Producto = {
  titlecard: string;
  image: string;
  description: string;
  stock: number;
  contenchip: string;
};

type BodegaDetalleProps = {
  nombreBodega: string;
  estado: string;
  descripcion: string;
  encargado: Encargado;
  detalles: DetallesBodega;
  inventario: Inventario;
  productos: Producto[];
};

export default function BodegaDetalle({
  nombreBodega,
  estado,
  descripcion,
  encargado,
  detalles,
  inventario,
  productos,
}: BodegaDetalleProps) {
  const [selected, setSelected] = useState("general");

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* 🔹 Encabezado con degradado oscuro e ícono */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 rounded-2xl mb-8 shadow-md flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {nombreBodega}
            <span className="ml-3 px-3 py-1 text-sm bg-green-200 text-green-800 rounded-full">
              {estado}
            </span>
          </h1>
          <p className="mt-2 text-sm opacity-90">{descripcion}</p>
        </div>
      </div>

      {/* 🔹 Cards Resumen con sombra suave */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <CardSoli
          title="Total de Items"
          icon={<Package size={22} />}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
          value={inventario.total}
        />
        <CardSoli
          title="Items Disponibles"
          icon={<CheckCircle size={22} />}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
          value={inventario.disponibles}
        />
        <CardSoli
          title="En Préstamo"
          icon={<Clock size={22} />}
          iconBgColor="bg-yellow-100"
          iconColor="text-yellow-600"
          value={inventario.prestamo}
        />
        <CardSoli
          title="Stock Bajo"
          icon={<AlertTriangle size={22} />}
          iconBgColor="bg-red-100"
          iconColor="text-red-600"
          value={inventario.stockBajo}
        />
      </div>

      {/* 🔹 Tabs con mismo estilo */}
      <Tabs
        aria-label="Opciones de Bodega"
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key.toString())}
        className="mb-6"
      >
        {/* TAB INFORMACIÓN GENERAL */}
        <Tab key="general" title="Información General">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card Encargado */}
            <div className="col-span-1 p-5 border rounded-xl shadow bg-white hover:shadow-lg transition">
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <Phone size={18} /> Información del Encargado
              </h2>
              <p>
                <strong>Nombre:</strong> {encargado.nombre}
              </p>
              <p>
                <strong>Cargo:</strong> {encargado.cargo}
              </p>
              <p>
                <strong>Email:</strong> {encargado.email}
              </p>
              <p>
                <strong>Teléfono:</strong> {encargado.telefono}
              </p>
            </div>

            {/* Card Detalles */}
            <div className="col-span-1 p-5 border rounded-xl shadow bg-white hover:shadow-lg transition">
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <MapPin size={18} /> Detalles de la Bodega
              </h2>
              <p>
                <strong>Ubicación:</strong> {detalles.ubicacion}
              </p>
              <p>
                <strong>Fecha de Creación:</strong> {detalles.fechaCreacion}
              </p>
              <p>
                <strong>Última Actualización:</strong> {detalles.ultimaActualizacion}
              </p>
              <p>
                <strong>Total de Items:</strong> {detalles.totalItems}
              </p>
            </div>

            {/* Card Inventario */}
            <div className="col-span-1 p-5 border rounded-xl shadow bg-white hover:shadow-lg transition">
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <Database size={18} /> Resumen de Inventario
              </h2>
              <p>
                <strong>Total:</strong> {inventario.total}
              </p>
              <p>
                <strong>Disponibles:</strong> {inventario.disponibles}
              </p>
              <p>
                <strong>En Préstamo:</strong> {inventario.prestamo}
              </p>
              <p>
                <strong>Stock Bajo:</strong> {inventario.stockBajo}
              </p>
              <h2 className="font-semibold mt-4">Información Adicional</h2>
              <p>
                <strong>Estado:</strong> {inventario.estado}
              </p>
              <p>
                <strong>Capacidad:</strong> {inventario.capacidad}
              </p>
              <p>
                <strong>Última Auditoría:</strong> {inventario.ultimaAuditoria}
              </p>
            </div>
          </div>
        </Tab>

        {/* TAB PRODUCTOS */}
        <Tab key="productos" title={`Productos (${productos.length})`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg">Productos en {nombreBodega}</h2>
            <BarraBusqueda></BarraBusqueda>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-52">
            {productos.map((prod, i) => (
              <CardProductDetail
              classNameCard="w-[350px]"
                key={i}
                titlecard={prod.titlecard}
                image={prod.image}
                description={prod.description}
                stock={prod.stock}
                contenchip={prod.contenchip}
              />
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
