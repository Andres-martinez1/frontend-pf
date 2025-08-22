import CustomCard from "../molecules/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

export type Bodega = { idBodega: number; nombreBodega: string };
export type Elemento = { idElemento: number; nombreElemento: string };

export type BodegaElemento = {
  id: number;
  stockActual: number;
  stockMinimo: number | null;
  fkIdBodega: Bodega;
  fkIdElemento: Elemento;
};

interface StockDisponibleProps {
  productosDisponibles: BodegaElemento[];
  historicoDisponible: { fecha: string; cantidad: number }[];
}

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

export default function StockDisponible({
  productosDisponibles,
  historicoDisponible,
}: StockDisponibleProps) {
  const ejemploDisponible = productosDisponibles.length
    ? productosDisponibles
    : [
        {
          id: 1,
          stockActual: 120,
          stockMinimo: 50,
          fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" },
          fkIdElemento: { idElemento: 1, nombreElemento: "Producto A" },
        },
        {
          id: 2,
          stockActual: 80,
          stockMinimo: 30,
          fkIdBodega: { idBodega: 2, nombreBodega: "Bodega Secundaria" },
          fkIdElemento: { idElemento: 2, nombreElemento: "Producto B" },
        },
        {
          id: 3,
          stockActual: 50,
          stockMinimo: 20,
          fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" },
          fkIdElemento: { idElemento: 3, nombreElemento: "Producto C" },
        },
      ];

  // Comparación stock vs mínimo
  const barData = ejemploDisponible.map((be) => ({
    nombreProducto: be.fkIdElemento.nombreElemento,
    stock: be.stockActual,
    minimo: be.stockMinimo || 0,
  }));

  // Distribución de stock por producto
  const pieData = ejemploDisponible.map((be) => ({
    nombreProducto: be.fkIdElemento.nombreElemento,
    stock: be.stockActual,
  }));

  // Tendencia histórica
  const lineData = historicoDisponible.length
    ? historicoDisponible
    : [
        { fecha: "2025-08-01", cantidad: 120 },
        { fecha: "2025-08-02", cantidad: 180 },
        { fecha: "2025-08-03", cantidad: 150 },
      ];

  // Acumulado
  const areaData = historicoDisponible.length
    ? historicoDisponible.map((item, index) => ({
        fecha: item.fecha,
        acumulado: historicoDisponible
          .slice(0, index + 1)
          .reduce((sum, i) => sum + i.cantidad, 0),
      }))
    : [
        { fecha: "2025-08-01", acumulado: 120 },
        { fecha: "2025-08-02", acumulado: 300 },
        { fecha: "2025-08-03", acumulado: 450 },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Stock disponible vs mínimo */}
      <CustomCard conten="Stock disponible vs mínimo por producto">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill="#3B82F6" name="Stock disponible" />
            <Bar dataKey="minimo" fill="#EF4444" name="Stock mínimo" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Distribución de stock */}
      <CustomCard conten="Distribución de stock por producto">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="stock"
              nameKey="nombreProducto"
              outerRadius={80}
              label
            >
              {pieData.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Evolución histórica */}
      <CustomCard conten="Evolución histórica del stock disponible">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="cantidad"
              stroke="#10B981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Acumulado */}
      <CustomCard conten="Acumulado de stock disponible">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={areaData}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="acumulado"
              fill="#3B82F6"
              stroke="#1D4ED8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
