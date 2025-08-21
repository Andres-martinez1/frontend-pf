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

export type Bodega = { idBodega: number; nombreBodega: string };
export type Elemento = { idElemento: number; nombreElemento: string };

export type BodegaElemento = {
  id: number;
  stockActual: number;
  stockMinimo: number | null;
  fkIdBodega: Bodega;
  fkIdElemento: Elemento;
};

export interface AISPAProps {
  productosActivos: BodegaElemento[];
  historicoStock: { fecha: string; cantidad: number }[];
}

const COLORS = ["#4F46E5", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

export default function AISPA({ productosActivos, historicoStock }: AISPAProps) {
  const barData = productosActivos.map((be) => ({
    nombreProducto: be.fkIdElemento.nombreElemento,
    cantidad: be.stockActual,
  }));

  const pieData = barData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <CustomCard conten="Stock por producto">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      <CustomCard conten="Distribución de stock">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="cantidad"
              nameKey="nombreProducto"
              outerRadius={80}
            >
              {pieData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CustomCard>

      <CustomCard conten="Evolución del stock">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={historicoStock}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cantidad" stroke="#10B981" />
          </LineChart>
        </ResponsiveContainer>
      </CustomCard>

      <CustomCard conten="Volumen acumulado del stock">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={historicoStock}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="cantidad" fill="#3B82F6" stroke="#3B82F6" />
          </AreaChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
