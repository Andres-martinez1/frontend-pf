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
  AreaChart,
  Area,
  LineChart,
  Line,
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

interface StockCriticoProps {
  productosCriticos: BodegaElemento[];
  historicoCritico: { fecha: string; cantidad: number }[];
}

const COLORS = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6"];

export default function StockCritico({ productosCriticos, historicoCritico }: StockCriticoProps) {
  // Datos de ejemplo si vienen vacíos
  const ejemploCritico = productosCriticos.length
    ? productosCriticos
    : [
        { id: 1, stockActual: 5, stockMinimo: 50, fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" }, fkIdElemento: { idElemento: 1, nombreElemento: "carro" } },
        { id: 2, stockActual: 8, stockMinimo: 30, fkIdBodega: { idBodega: 2, nombreBodega: "Bodega Secundaria" }, fkIdElemento: { idElemento: 2, nombreElemento: "Lapiz" } },
      ];

  const barData = ejemploCritico.map(be => ({
    nombreProducto: be.fkIdElemento.nombreElemento,
    cantidad: be.stockActual,
    minimo: be.stockMinimo || 0,
  }));

  const pieData = barData;

  // Datos acumulados para AreaChart
  const areaData = historicoCritico.length
    ? historicoCritico.map((item, index) => ({
        fecha: item.fecha,
        acumulado: historicoCritico.slice(0, index + 1).reduce((sum, i) => sum + i.cantidad, 0),
      }))
    : [
        { fecha: "2025-08-01", acumulado: 5 },
        { fecha: "2025-08-02", acumulado: 13 },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
   <CustomCard conten="Stock actual vs mínimo">
  <ResponsiveContainer width="100%" height={250}>
    <BarChart layout="vertical" data={barData} margin={{ left: 60 }}>
      <XAxis type="number" />
      <YAxis dataKey="nombreProducto" type="category" />
      <Tooltip />
      <Bar dataKey="minimo" fill="#F59E0B" radius={[0, 8, 8, 0]} />
      <Bar dataKey="cantidad" fill="#EF4444" radius={[0, 8, 8, 0]} />
    </BarChart>
  </ResponsiveContainer>
</CustomCard>

  {/* Distribución de productos críticos */}
<CustomCard conten="Distribución de productos críticos">
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie
        data={pieData}
        dataKey="cantidad"
        nameKey="nombreProducto"
        outerRadius={90}
        label={({ name, percent }) =>
          `${name}: ${(percent ?? 0 * 100).toFixed(0)}%`
        }
      >
        {pieData.map((_entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip
        formatter={(value: number, _name, props) => [
          `${value} unidades`,
          props.payload?.nombreProducto,
        ]}
      />
    </PieChart>
  </ResponsiveContainer>
</CustomCard>


      <CustomCard conten="Evolución histórica de productos críticos">
  <ResponsiveContainer width="100%" height={250}>
    <AreaChart data={historicoCritico.length ? historicoCritico : [{ fecha: "2025-08-01", cantidad: 5 }, { fecha: "2025-08-02", cantidad: 8 }]}>
      <XAxis dataKey="fecha" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="cantidad" stroke="#EF4444" fill="#FCA5A5" strokeWidth={2} />
    </AreaChart>
  </ResponsiveContainer>
</CustomCard>

    <CustomCard conten="Acumulado de productos en riesgo">
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={areaData}>
      <XAxis dataKey="fecha" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="acumulado" stroke="#B91C1C" strokeWidth={3} dot={{ r: 4 }} />
    </LineChart>
  </ResponsiveContainer>
</CustomCard>
    </div>
  );
}
