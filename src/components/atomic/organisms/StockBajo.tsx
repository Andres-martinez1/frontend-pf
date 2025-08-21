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

interface StockBajoProps {
  productosBajos: BodegaElemento[];
  historicoBajo: { fecha: string; cantidad: number }[];
}

const COLORS = ["#F59E0B", "#EF4444", "#10B981", "#3B82F6"];

export default function StockBajo({ productosBajos, historicoBajo }: StockBajoProps) {
  const ejemploBajo = productosBajos.length
    ? productosBajos
    : [
        { id: 1, stockActual: 25, stockMinimo: 50, fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" }, fkIdElemento: { idElemento: 1, nombreElemento: "Producto A" } },
        { id: 2, stockActual: 10, stockMinimo: 30, fkIdBodega: { idBodega: 2, nombreBodega: "Bodega Secundaria" }, fkIdElemento: { idElemento: 2, nombreElemento: "Producto B" } },
      ];

  const barData = ejemploBajo.map(be => ({
    nombreProducto: be.fkIdElemento.nombreElemento,
    cantidad: be.stockActual,
    minimo: be.stockMinimo || 0,
  }));

  const pieData = ejemploBajo.map(be => ({
    nombreProducto: be.fkIdElemento.nombreElemento,
    cantidad: be.stockActual,
  }));

  const lineData = historicoBajo.length
    ? historicoBajo
    : [
        { fecha: "2025-08-01", cantidad: 25 },
        { fecha: "2025-08-02", cantidad: 10 },
      ];

  const areaData = historicoBajo.length
    ? historicoBajo.map((item, index) => ({
        fecha: item.fecha,
        acumulado: historicoBajo.slice(0, index + 1).reduce((sum, i) => sum + i.cantidad, 0),
      }))
    : [
        { fecha: "2025-08-01", acumulado: 25 },
        { fecha: "2025-08-02", acumulado: 35 },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Barra de stock bajo vs mínimo */}
      <CustomCard conten="Stock bajo vs mínimo">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#F59E0B" />
            <Bar dataKey="minimo" fill="#EF4444" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Distribución de stock bajo */}
      <CustomCard conten="Distribución de productos bajos">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="cantidad" nameKey="nombreProducto" outerRadius={80}>
              {pieData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Evolución histórica de stock bajo */}
      <CustomCard conten="Evolución histórica de stock bajo">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cantidad" stroke="#F59E0B" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Acumulado de stock bajo */}
      <CustomCard conten="Acumulado de productos con stock bajo">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={areaData}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="acumulado" fill="#F59E0B" stroke="#B45309" />
          </AreaChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
