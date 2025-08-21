import CustomCard from "../molecules/Card";
import {
  Treemap,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { Elemento } from "../../../types/Elementos/Elemento";

interface StockNormalProps {
  elementos: Elemento[];
}

export default function StockNormal({ elementos }: StockNormalProps) {
  const hoy = new Date();

  // Filtrar solo productos normales (días restantes > 15)
  const normales = elementos
    .map(el => {
      const venc = el.fechaVencimiento ? new Date(el.fechaVencimiento) : hoy;
      const diasRestantes = Math.max(0, Math.ceil((venc.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24)));
      return { ...el, diasRestantes };
    })
    .filter(el => el.diasRestantes > 15);

  // Treemap: cantidad por producto
  const treemapData = normales.map(el => ({
    name: el.nombreElemento,
    size: el.bodegaElementos?.reduce((sum, b) => sum + b.cantidad, 0) || 0,
  }));

  // BarChart: días restantes vs cantidad
  const barData = normales.map(el => ({
    nombreProducto: el.nombreElemento,
    cantidadTotal: el.bodegaElementos?.reduce((sum, b) => sum + b.cantidad, 0) || 0,
    diasRestantes: el.diasRestantes,
  }));

  // PieChart: distribución por bodega
  const pieData: { name: string; value: number }[] = [];
  normales.forEach(el =>
    el.bodegaElementos?.forEach(b => {
      pieData.push({ name: b.fkIdBodega.nombreBodega, value: b.cantidad });
    })
  );

  // AreaChart: cantidad acumulada por producto
  const areaData = normales.map(el => ({
    nombreProducto: el.nombreElemento,
    cantidadTotal: el.bodegaElementos?.reduce((sum, b) => sum + b.cantidad, 0) || 0,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Treemap */}
      <CustomCard conten="Cantidad por producto">
        <ResponsiveContainer width="100%" height={250}>
          <Treemap data={treemapData} dataKey="size" stroke="#fff" fill="#8884d8" />
        </ResponsiveContainer>
      </CustomCard>

      {/* BarChart */}
      <CustomCard conten="Días restantes vs cantidad">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidadTotal" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* PieChart */}
      <CustomCard conten="Distribución por bodega">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
              {pieData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={["#3B82F6", "#10B981", "#FBBF24", "#EF4444"][index % 4]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* AreaChart */}
      <CustomCard conten="Cantidad acumulada por producto">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={areaData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="cantidadTotal" stroke="#3B82F6" fill="#93C5FD" />
          </AreaChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
