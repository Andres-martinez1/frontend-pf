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

interface StockProximoProps {
  elementos: Elemento[];
}

const URGENCY_COLORS = ["#F97316", "#EF4444"]; // Naranja: cerca, Rojo: crítico

export default function StockProximoVencer({ elementos }: StockProximoProps) {
  const hoy = new Date();

  // Filtrar solo los próximos a vencer (<=15 días)
  const proximos = elementos
    .map(el => {
      const venc = el.fechaVencimiento ? new Date(el.fechaVencimiento) : hoy;
      const diasRestantes = Math.max(0, Math.ceil((venc.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24)));
      let nivel = diasRestantes <= 5 ? 1 : 0; // 1: crítico, 0: cercano
      return { ...el, diasRestantes, nivel };
    })
    .filter(el => el.diasRestantes <= 15);

  // Treemap: cantidad por producto próximo a vencer
  const treemapData = proximos.map(el => ({
    name: el.nombreElemento,
    size: el.bodegaElementos?.reduce((sum, b) => sum + b.cantidad, 0) || 0,
    fill: URGENCY_COLORS[el.nivel],
  }));

  // BarChart: días restantes vs cantidad
  const barData = proximos.map(el => ({
    nombreProducto: el.nombreElemento,
    cantidadTotal: el.bodegaElementos?.reduce((sum, b) => sum + b.cantidad, 0) || 0,
    diasRestantes: el.diasRestantes,
    fill: URGENCY_COLORS[el.nivel],
  }));

  // PieChart: distribución por nivel de urgencia
  const pieData = [
    { name: "Crítico (<=5 días)", value: proximos.filter(e => e.nivel === 1).length },
    { name: "Próximo a vencer (6-15 días)", value: proximos.filter(e => e.nivel === 0).length },
  ];

  // AreaChart: cantidad acumulada de productos próximos a vencer
  const areaData = proximos.map(el => ({
    nombreProducto: el.nombreElemento,
    cantidadTotal: el.bodegaElementos?.reduce((sum, b) => sum + b.cantidad, 0) || 0,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Treemap */}
      <CustomCard conten="Cantidad por producto próximo a vencer">
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
            <Bar dataKey="cantidadTotal" fill="#F97316" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* PieChart */}
      <CustomCard conten="Distribución por nivel de urgencia">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
              {pieData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={URGENCY_COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* AreaChart */}
      <CustomCard conten="Cantidad acumulada de productos próximos a vencer">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={areaData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="cantidadTotal" stroke="#EF4444" fill="#F97316" />
          </AreaChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
