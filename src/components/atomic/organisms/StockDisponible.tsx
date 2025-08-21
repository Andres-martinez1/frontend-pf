import CustomCard from "../molecules/Card";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
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
      ];

  const radarData = ejemploDisponible.map((be) => ({
    subject: be.fkIdElemento.nombreElemento,
    A: be.stockActual,
    fullMark: be.stockMinimo || 50,
  }));


  const lineData = historicoDisponible.length
    ? historicoDisponible
    : [
        { fecha: "2025-08-01", cantidad: 120 },
        { fecha: "2025-08-02", cantidad: 80 },
      ];

  const areaData = historicoDisponible.length
    ? historicoDisponible.map((item, index) => ({
        fecha: item.fecha,
        acumulado: historicoDisponible
          .slice(0, index + 1)
          .reduce((sum, i) => sum + i.cantidad, 0),
      }))
    : [
        { fecha: "2025-08-01", acumulado: 120 },
        { fecha: "2025-08-02", acumulado: 200 },
      ];

  const radialData = ejemploDisponible.map((be) => ({
    name: be.fkIdElemento.nombreElemento,
    value: be.stockActual,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Radar chart: stock vs mínimo */}
      <CustomCard conten="Radar de stock disponible vs mínimo">
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Stock Actual"
              dataKey="A"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* RadialBar de productos disponibles (sin cambios) */}
      <CustomCard conten="Proporción de productos disponibles">
        <ResponsiveContainer width="100%" height={250}>
          <RadialBarChart innerRadius="10%" outerRadius="80%" data={radialData}>
            <RadialBar dataKey="value" background />
            <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* ComposedChart: línea + barra */}
      <CustomCard conten="Evolución histórica de stock disponible">
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={lineData}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#F59E0B" barSize={20} />
            <Line type="monotone" dataKey="cantidad" stroke="#EF4444" strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* AreaChart: acumulado con otro color */}
      <CustomCard conten="Acumulado de stock disponible">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={areaData}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="acumulado" fill="#3B82F6" stroke="#1D4ED8" />
          </AreaChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
