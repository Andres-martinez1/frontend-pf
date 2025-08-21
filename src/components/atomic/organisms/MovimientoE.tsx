import CustomCard from "../molecules/Card";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export type Movimiento = {
  idMovimiento: number;
  tipoMovimiento: string | null;
  cantidad: number;
  fechaMovimiento: string | null;
  referencia: string | null;
  fkIdBodegaElemento: {
    id: number;
    nombreElemento: string;
  };
  fkIdUsuario: {
    idUsuario: number;
    nombres: string;
    apellidos: string;
  };
};

interface MovimientosStatsProps {
  movimientos: Movimiento[];
}

const COLORS = ["#4F46E5", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

export default function MovimientosStats({ movimientos }: MovimientosStatsProps) {
  // 1. Agrupar cantidad total por elemento
  const elementosMap: Record<string, number> = {};
  movimientos.forEach((m) => {
    const nombre = m.fkIdBodegaElemento.nombreElemento;
    elementosMap[nombre] = (elementosMap[nombre] || 0) + m.cantidad;
  });
  const barData = Object.entries(elementosMap).map(([nombreProducto, cantidad]) => ({ nombreProducto, cantidad }));
  const pieData = barData;

  // 2. Datos para línea y área: evolución por fecha (suma de cantidad)
  const fechaMap: Record<string, number> = {};
  movimientos.forEach((m) => {
    const fecha = m.fechaMovimiento || "Sin fecha";
    fechaMap[fecha] = (fechaMap[fecha] || 0) + m.cantidad;
  });
  const historicoData = Object.entries(fechaMap)
    .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())
    .map(([fecha, cantidad]) => ({ fecha, cantidad }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* BarChart: cantidad total por elemento */}
      <CustomCard conten="Cantidad total por elemento">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* PieChart: proporción de movimientos por elemento */}
      <CustomCard conten="Proporción de movimientos por elemento">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="cantidad" nameKey="nombreProducto" outerRadius={80} label>
              {pieData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* LineChart: evolución de movimientos por fecha */}
      <CustomCard conten="Evolución de movimientos por fecha">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={historicoData}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cantidad" stroke="#10B981" />
          </LineChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* AreaChart: volumen acumulado de movimientos */}
      <CustomCard conten="Volumen acumulado de movimientos">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={historicoData}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="cantidad" stroke="#3B82F6" fill="#93C5FD" />
          </AreaChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
