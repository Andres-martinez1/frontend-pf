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

interface StockUrgenciaProps {
  elementos: Elemento[];
}

const URGENCY_COLORS = ["#10B981", "#FBBF24", "#F97316", "#EF4444"]; // verde, amarillo, naranja, rojo

export default function StockUrgencia({ elementos }: StockUrgenciaProps) {
  const hoy = new Date();

  // Calcular días restantes y nivel de urgencia
  const elementosUrgencia = elementos.map(el => {
    const venc = el.fechaVencimiento ? new Date(el.fechaVencimiento) : hoy;
    const diasRestantes = Math.max(0, Math.ceil((venc.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24)));
    let nivel = 0;
    if (diasRestantes <= 5) nivel = 3;
    else if (diasRestantes <= 15) nivel = 2;
    else if (diasRestantes <= 30) nivel = 1;
    return { ...el, diasRestantes, nivel };
  });

  // Treemap: cantidad total por producto
  const treemapData = elementosUrgencia.map(el => ({
    name: el.nombreElemento,
    size: el.bodegaElementos?.reduce((sum, b) => sum + b.cantidad, 0) || 0,
    fill: URGENCY_COLORS[el.nivel],
  }));

  // RadialBar: urgencia de vencimiento
  const radialData = elementosUrgencia.map(el => ({
    name: el.nombreElemento,
    value: el.diasRestantes,
    fill: URGENCY_COLORS[el.nivel],
  }));

  // PieChart: proporción de productos por nivel de urgencia
  const pieData = [
    { name: "Vencido/Muy Urgente", value: elementosUrgencia.filter(e => e.nivel === 3).length },
    { name: "Próximo a vencer", value: elementosUrgencia.filter(e => e.nivel === 2).length },
    { name: "Moderado", value: elementosUrgencia.filter(e => e.nivel === 1).length },
    { name: "Seguro", value: elementosUrgencia.filter(e => e.nivel === 0).length },
  ];

  // ComposedChart: días restantes por producto
  const composedData = elementosUrgencia.map(el => ({
    nombreProducto: el.nombreElemento,
    diasRestantes: el.diasRestantes,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Treemap */}
      <CustomCard conten="Cantidad total por producto (urgencia)">
        <ResponsiveContainer width="100%" height={250}>
          <Treemap
            data={treemapData}
            dataKey="size"
            stroke="#fff"
            fill="#8884d8"
          />
        </ResponsiveContainer>
      </CustomCard>

      {/* RadialBar */}
      <CustomCard conten="Urgencia de vencimiento (días restantes)">
        <ResponsiveContainer width="100%" height={250}>
          <RadialBarChart innerRadius="10%" outerRadius="80%" data={radialData}>
            <RadialBar dataKey="value" background fill="#8884d8" />
            <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
            <Tooltip />
          </RadialBarChart>
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

      {/* ComposedChart */}
      <CustomCard conten="Días restantes por producto">
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={composedData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="diasRestantes" barSize={20} fill="#F59E0B" />
            <Line type="monotone" dataKey="diasRestantes" stroke="#EF4444" strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
