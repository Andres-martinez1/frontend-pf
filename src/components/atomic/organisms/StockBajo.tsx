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
  Legend,
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

interface StockBajoProps {
  productosBajos: BodegaElemento[];
  historicoBajo: { fecha: string; cantidad: number }[];
}

const COLORS = ["#F59E0B", "#EF4444", "#10B981", "#3B82F6", "#8B5CF6"];

export default function StockBajo({ productosBajos, historicoBajo }: StockBajoProps) {
  const ejemploBajo = productosBajos.length
    ? productosBajos
    : [
        { id: 1, stockActual: 25, stockMinimo: 50, fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" }, fkIdElemento: { idElemento: 1, nombreElemento: "Producto A" } },
        { id: 2, stockActual: 10, stockMinimo: 30, fkIdBodega: { idBodega: 2, nombreBodega: "Bodega Secundaria" }, fkIdElemento: { idElemento: 2, nombreElemento: "Producto B" } },
        { id: 3, stockActual: 8, stockMinimo: 20, fkIdBodega: { idBodega: 3, nombreBodega: "Bodega Norte" }, fkIdElemento: { idElemento: 3, nombreElemento: "Producto C" } },
      ];

  // Data para gráficas
  const barData = ejemploBajo.map(be => ({
    nombreProducto: be.fkIdElemento.nombreElemento,
    stockActual: be.stockActual,
    stockMinimo: be.stockMinimo || 0,
  }));

  const pieData = ejemploBajo.map(be => ({
    nombreProducto: be.fkIdElemento.nombreElemento,
    cantidad: be.stockActual,
  }));

  const lineData = historicoBajo.length
    ? historicoBajo
    : [
        { fecha: "2025-08-01", cantidad: 25 },
        { fecha: "2025-08-02", cantidad: 18 },
        { fecha: "2025-08-03", cantidad: 10 },
      ];

  const areaData = historicoBajo.length
    ? historicoBajo.map((item, index) => ({
        fecha: item.fecha,
        acumulado: historicoBajo.slice(0, index + 1).reduce((sum, i) => sum + i.cantidad, 0),
      }))
    : [
        { fecha: "2025-08-01", acumulado: 25 },
        { fecha: "2025-08-02", acumulado: 43 },
        { fecha: "2025-08-03", acumulado: 53 },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Barra de stock bajo vs mínimo */}
      <CustomCard conten="Stock actual vs mínimo por producto">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={barData} barGap={8}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="stockActual" fill="#F59E0B" radius={[6, 6, 0, 0]} name="Stock Actual" />
            <Bar dataKey="stockMinimo" fill="#EF4444" radius={[6, 6, 0, 0]} name="Stock Mínimo" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Distribución de stock bajo (dona) */}
      <CustomCard conten="Distribución de productos con stock bajo">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="cantidad"
              nameKey="nombreProducto"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={4}
              label={({ name, percent }) => `${name}: ${(percent ?? 0 * 100).toFixed(0)}%`}
            >
              {pieData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `${value} unidades`} />
          </PieChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Evolución histórica de stock bajo */}
      <CustomCard conten="Tendencia de productos con stock bajo">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={lineData}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip formatter={(value: number) => `${value} unidades`} />
            <Line
              type="monotone"
              dataKey="cantidad"
              stroke="#F59E0B"
              strokeWidth={3}
              dot={{ r: 5, fill: "#EF4444", stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Acumulado de stock bajo */}
      <CustomCard conten="Acumulado de stock bajo">
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={areaData}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip formatter={(value: number) => `${value} unidades`} />
            <Area
              type="monotone"
              dataKey="acumulado"
              stroke="#B45309"
              fillOpacity={1}
              fill="url(#colorStock)"
            />
            <defs>
              <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
