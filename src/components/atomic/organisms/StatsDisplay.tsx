import React from "react";
import AISPA, { BodegaElemento as BodegaElementoActivos } from "../organisms/InventarioActivos";
import StockCritico from "../organisms/StockCritico"; // nuevo componente para stock crítico
import { SearchIcon } from "lucide-react";
import StockBajo from "./StockBajo";
import StockDisponible from "./StockDisponible";
import StockPrestamo, { BodegaElemento as BodegaElementoPrestamo } from "./StockPrestamo";
import StockVencimiento from "./Vencimiento";
import StockUrgencia from "./Urgencia";
import StockProximoVencer from "./ProximoVencer";
import StockNormal from "./StockNormal";
import MovimientosStats, { Movimiento } from "./MovimientoE";
import MovimientosMediaRotacion from "./MediaRotacion";
import MovimientosBajaRotacion from "./BajaRotacion";

type Props = {
  tipo: string | null;
  estado: string | null;
};

// Datos simulados
const productosSimuladosActivos: BodegaElementoActivos[] = [
  { id: 1, stockActual: 120, stockMinimo: 50, fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" }, fkIdElemento: { idElemento: 1, nombreElemento: "Producto A" } },
  { id: 2, stockActual: 80, stockMinimo: 30, fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" }, fkIdElemento: { idElemento: 2, nombreElemento: "Producto B" } },
  { id: 3, stockActual: 45, stockMinimo: 20, fkIdBodega: { idBodega: 2, nombreBodega: "Bodega Secundaria" }, fkIdElemento: { idElemento: 3, nombreElemento: "Producto C" } },
  { id: 4, stockActual: 150, stockMinimo: 50, fkIdBodega: { idBodega: 2, nombreBodega: "Bodega Secundaria" }, fkIdElemento: { idElemento: 4, nombreElemento: "Producto D" } },
];

const historicoSimulado = [
  { fecha: "2025-08-01", cantidad: 200 },
  { fecha: "2025-08-02", cantidad: 220 },
  { fecha: "2025-08-03", cantidad: 180 },
  { fecha: "2025-08-04", cantidad: 240 },
  { fecha: "2025-08-05", cantidad: 210 },
];

const elementosSimulados = [
  {
    idElemento: 1,
    nombreElemento: "Producto A",
    clasificacion: "Bebida",
    tipo: "Líquido",
    marca: "Marca X",
    fechaVencimiento: "2025-08-10", // próximo a vencer
    bodegaElementos: [
      { idBodegaElemento: 1, cantidad: 50, fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" } },
      { idBodegaElemento: 2, cantidad: 20, fkIdBodega: { idBodega: 2, nombreBodega: "Bodega Secundaria" } },
    ],
  },
  {
    idElemento: 2,
    nombreElemento: "Producto B",
    clasificacion: "Alimento",
    tipo: "Sólido",
    marca: "Marca Y",
    fechaVencimiento: "2025-07-15", // vencido
    bodegaElementos: [
      { idBodegaElemento: 3, cantidad: 10, fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" } },
      { idBodegaElemento: 4, cantidad: 5, fkIdBodega: { idBodega: 3, nombreBodega: "Bodega Secundaria" } },
    ],
  },
  {
    idElemento: 3,
    nombreElemento: "Producto C",
    clasificacion: "Químico",
    tipo: "Líquido",
    marca: "Marca Z",
    fechaVencimiento: "2025-09-01", // próximo a vencer
    bodegaElementos: [
      { idBodegaElemento: 5, cantidad: 30, fkIdBodega: { idBodega: 2, nombreBodega: "Bodega Secundaria" } },
    ],
  },
  {
    idElemento: 4,
    nombreElemento: "Producto D",
    clasificacion: "Medicamento",
    tipo: "Sólido",
    marca: "Marca W",
    fechaVencimiento: "2025-08-05", // crítico
    bodegaElementos: [
      { idBodegaElemento: 6, cantidad: 15, fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" } },
    ],
  },
  // --- Productos "normales" ---
  {
    idElemento: 5,
    nombreElemento: "Producto E",
    clasificacion: "Bebida",
    tipo: "Líquido",
    marca: "Marca N",
    fechaVencimiento: "2025-12-01", // normal (>15 días)
    bodegaElementos: [
      { idBodegaElemento: 7, cantidad: 80, fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" } },
    ],
  },
  {
    idElemento: 6,
    nombreElemento: "Producto F",
    clasificacion: "Alimento",
    tipo: "Sólido",
    marca: "Marca M",
    fechaVencimiento: "2025-11-20", // normal
    bodegaElementos: [
      { idBodegaElemento: 8, cantidad: 60, fkIdBodega: { idBodega: 2, nombreBodega: "Bodega Secundaria" } },
    ],
  },
  {
    idElemento: 7,
    nombreElemento: "Producto G",
    clasificacion: "Medicamento",
    tipo: "Sólido",
    marca: "Marca L",
    fechaVencimiento: "2025-10-15", // normal
    bodegaElementos: [
      { idBodegaElemento: 9, cantidad: 40, fkIdBodega: { idBodega: 3, nombreBodega: "Bodega Terciaria" } },
    ],
  },
];
const movimientosSimulados: Movimiento[] = [
  {
    idMovimiento: 1,
    tipoMovimiento: "Ingreso",
    cantidad: 10,
    fechaMovimiento: "2025-08-01",
    referencia: "Ref001",
    fkIdBodegaElemento: { id: 1, nombreElemento: "Producto A" },
    fkIdUsuario: { idUsuario: 1, nombres: "Juan", apellidos: "Pérez" },
  },
  {
    idMovimiento: 2,
    tipoMovimiento: "Salida",
    cantidad: 5,
    fechaMovimiento: "2025-08-02",
    referencia: "Ref002",
    fkIdBodegaElemento: { id: 2, nombreElemento: "Producto B" },
    fkIdUsuario: { idUsuario: 2, nombres: "Ana", apellidos: "Gómez" },
  },
  {
    idMovimiento: 3,
    tipoMovimiento: "Ingreso",
    cantidad: 15,
    fechaMovimiento: "2025-08-03",
    referencia: "Ref003",
    fkIdBodegaElemento: { id: 3, nombreElemento: "Producto C" },
    fkIdUsuario: { idUsuario: 3, nombres: "Luis", apellidos: "Martínez" },
  },
  {
    idMovimiento: 4,
    tipoMovimiento: "Salida",
    cantidad: 8,
    fechaMovimiento: "2025-08-04",
    referencia: "Ref004",
    fkIdBodegaElemento: { id: 1, nombreElemento: "Producto A" },
    fkIdUsuario: { idUsuario: 4, nombres: "Carla", apellidos: "Ramírez" },
  },
];


const StatsDisplay: React.FC<Props> = ({ tipo, estado }) => {
  // Mensaje por defecto si no hay filtros
  if (!tipo || !estado) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <SearchIcon className="w-12 h-12 mb-4" />
        <p className="text-lg">Selecciona un tipo y estado para ver las estadísticas</p>
      </div>
    );
  }

  // Mapear productos para préstamo agregando "cantidadPrestada"
  const productosSimuladosPrestamo: BodegaElementoPrestamo[] = productosSimuladosActivos.map(p => ({
    ...p,
    cantidadPrestada: Math.floor(Math.random() * (p.stockActual + 1)), // Ejemplo: cantidad prestada aleatoria
  }));

  // Mapeo de filtros a componentes de gráficos
  const filterMap: Record<string, Record<string, JSX.Element>> = {
    inventario: {
      activos: <AISPA productosActivos={productosSimuladosActivos} historicoStock={historicoSimulado} />,
      critico: <StockCritico productosCriticos={productosSimuladosActivos.filter(p => p.stockActual < (p.stockMinimo || 0))} historicoCritico={historicoSimulado} />,
      bajo: <StockBajo productosBajos={productosSimuladosActivos} historicoBajo={historicoSimulado} />,
      disponibles: <StockDisponible productosDisponibles={productosSimuladosActivos} historicoDisponible={historicoSimulado} />,
      prestamo: <StockPrestamo productosPrestamo={productosSimuladosPrestamo} />,
    },
    vencimientos :{
        critico:<StockVencimiento elementos={elementosSimulados}/>,
        urgente:<StockUrgencia elementos={elementosSimulados}/>,
        proximo:<StockProximoVencer elementos={elementosSimulados} />,
        normal:<StockNormal elementos={elementosSimulados}/>,
    },
    movimientos :{

        alta:<MovimientosStats movimientos={movimientosSimulados}/>,
        media:<MovimientosMediaRotacion movimientos={movimientosSimulados}/>,
        baja:<MovimientosBajaRotacion movimientos={movimientosSimulados}/>,
    }

    // Puedes agregar más tipos como "vencimientos", "movimientos", "Rotacion"
  };

  return filterMap[tipo]?.[estado] || (
    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
      <SearchIcon className="w-12 h-12 mb-4" />
      <p className="text-lg">No hay gráficos disponibles para esta selección</p>
    </div>
  );
};

export default StatsDisplay;
