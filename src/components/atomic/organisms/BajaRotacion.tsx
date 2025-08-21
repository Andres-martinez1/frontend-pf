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
  ScatterChart,
  Scatter,
  FunnelChart,
  Funnel,
  LabelList,
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

const COLORS = ["#93C5FD", "#BFDBFE", "#A7F3D0", "#FDE68A", "#FECACA"];

export default function MovimientosBajaRotacion({ movimientos }: MovimientosStatsProps) {
  // Filtrar baja rotación (ejemplo: cantidad <= 20)
  const bajaRotacion = movimientos.filter((m) => m.cantidad <= 20);

  // 1. Stacked Bar: cantidad total por elemento
  const elementosMap: Record<string, number> = {};
  bajaRotacion.forEach((m) => {
    const nombre = m.fkIdBodegaElemento.nombreElemento;
    elementosMap[nombre] = (elementosMap[nombre] || 0) + m.cantidad;
  });
  const barData = Object.entries(elementosMap).map(([nombreProducto, cantidad]) => ({
    nombreProducto,
    cantidad,
  }));

  // 2. FunnelChart: proporción de elementos
  const funnelData = barData.map((item) => ({
    name: item.nombreProducto,
    value: item.cantidad,
  }));

  // 3. ScatterChart: movimientos por fecha y cantidad
  const scatterData = bajaRotacion.map((m) => ({
    fecha: m.fechaMovimiento || "Sin fecha",
    cantidad: m.cantidad,
    nombre: m.fkIdBodegaElemento.nombreElemento,
  }));

  // 4. PieChart: proporción de elementos
  const pieData = barData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Stacked BarChart */}
      <CustomCard conten="Cantidad total por elemento (Baja Rotación)">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#93C5FD" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* FunnelChart */}
      <CustomCard conten="Proporción de elementos (Funnel)">
        <ResponsiveContainer width="100%" height={250}>
          <FunnelChart>
            <Funnel data={funnelData} dataKey="value" nameKey="name" isAnimationActive>
              <LabelList position="right" fill="#000" />
            </Funnel>
            <Tooltip />
          </FunnelChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* ScatterChart */}
      <CustomCard conten="Movimientos por fecha y cantidad">
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart>
            <XAxis dataKey="fecha" />
            <YAxis dataKey="cantidad" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={scatterData} fill="#FDE68A" />
          </ScatterChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* PieChart */}
      <CustomCard conten="Proporción de elementos (Pie)">
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
    </div>
  );
}
