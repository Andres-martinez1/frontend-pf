import CustomCard from "../molecules/Card";
import {
  Treemap,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Elemento } from "../../../types/Elementos/Elemento";

interface StockVencimientoProps {
  elementos: Elemento[];
}

const PIE_COLORS = ["#FBBF24", "#3B82F6", "#34D399", "#EF4444"];

export default function StockVencimiento({ elementos }: StockVencimientoProps) {
  // 1. Treemap: cantidad total por producto
  const treemapData = elementos.map(el => ({
    name: el.nombreElemento,
    size: el.bodegaElementos?.reduce((sum, b) => sum + b.cantidad, 0) || 0,
  }));

  // 2. RadialBar: días restantes hasta vencimiento
  const radialData = elementos.map(el => {
    const hoy = new Date();
    const venc = el.fechaVencimiento ? new Date(el.fechaVencimiento) : hoy;
    const diasRestantes = Math.max(0, Math.ceil((venc.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24)));
    return { name: el.nombreElemento, value: diasRestantes };
  });

  // 3. PieChart: proporción de cantidad por bodega
  const pieData: { name: string; value: number }[] = [];
  elementos.forEach(el =>
    el.bodegaElementos?.forEach(b => {
      pieData.push({ name: b.fkIdBodega.nombreBodega, value: b.cantidad });
    })
  );

  // 4. ComposedChart: cantidad total por producto (barras y línea)
  const composedData = elementos.map(el => ({
    nombreProducto: el.nombreElemento,
    cantidadTotal: el.bodegaElementos?.reduce((sum, b) => sum + b.cantidad, 0) || 0,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Treemap */}
      <CustomCard conten="Cantidad total por producto">
        <ResponsiveContainer width="100%" height={250}>
          <Treemap data={treemapData} dataKey="size" stroke="#fff" fill="#8884d8" />
        </ResponsiveContainer>
      </CustomCard>

      {/* RadialBar */}
      <CustomCard conten="Días restantes hasta vencimiento">
        <ResponsiveContainer width="100%" height={250}>
          <RadialBarChart innerRadius="10%" outerRadius="80%" data={radialData}>
            <RadialBar dataKey="value" background fill="#F59E0B" />
            <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* PieChart */}
      <CustomCard conten="Proporción de cantidad por bodega">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} fill="#3B82F6" label>
              {pieData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* ComposedChart */}
      <CustomCard conten="Cantidad total por producto">
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={composedData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidadTotal" barSize={20} fill="#10B981" />
            <Line type="monotone" dataKey="cantidadTotal" stroke="#EF4444" strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
