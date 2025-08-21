import CustomCard from "../molecules/Card";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Treemap,
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


export default function MovimientosMediaRotacion({ movimientos }: MovimientosStatsProps) {
  // Filtrar media rotación (ejemplo: cantidad entre 20 y 50)
  const mediaRotacion = movimientos.filter((m) => m.cantidad > 20 && m.cantidad <= 50);

  // 1. ComposedChart: cantidad total por elemento
  const elementosMap: Record<string, number> = {};
  mediaRotacion.forEach((m) => {
    const nombre = m.fkIdBodegaElemento.nombreElemento;
    elementosMap[nombre] = (elementosMap[nombre] || 0) + m.cantidad;
  });
  const composedData = Object.entries(elementosMap).map(([nombreProducto, cantidad]) => ({
    nombreProducto,
    cantidad,
  }));

  // 2. RadialBarChart: porcentaje de cada elemento respecto al total
  const totalCantidad = composedData.reduce((acc, item) => acc + item.cantidad, 0);
  const radialData = composedData.map((item) => ({
    name: item.nombreProducto,
    value: ((item.cantidad / totalCantidad) * 100).toFixed(1),
  }));

  // 3. RadarChart: evolución de movimientos por elemento (simulado por cantidad)
  const radarData = composedData.map((item) => ({
    elemento: item.nombreProducto,
    movimientos: item.cantidad,
  }));

  // 4. Treemap: cantidad por elemento
  const treemapData = composedData.map((item) => ({
    name: item.nombreProducto,
    size: item.cantidad,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* ComposedChart: barra + línea */}
      <CustomCard conten="Cantidad total por elemento (Media Rotación)">
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={composedData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#4F46E5" />
            <Line type="monotone" dataKey="cantidad" stroke="#F59E0B" />
          </ComposedChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* RadialBarChart: porcentaje de cada elemento */}
      <CustomCard conten="Porcentaje de movimientos por elemento">
        <ResponsiveContainer width="100%" height={250}>
          <RadialBarChart innerRadius="10%" outerRadius="80%" data={radialData}>
            <RadialBar dataKey="value" fill="#10B981" background />
            <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* RadarChart: comparación entre elementos */}
      <CustomCard conten="Movimientos por elemento (Radar)">
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="elemento" />
            <PolarRadiusAxis />
            <Radar dataKey="movimientos" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Treemap: cantidad acumulada */}
      <CustomCard conten="Cantidad acumulada por elemento (Treemap)">
        <ResponsiveContainer width="100%" height={250}>
          <Treemap data={treemapData} dataKey="size" stroke="#fff" fill="#3B82F6" />
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
