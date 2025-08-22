import CustomCard from "../molecules/Card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { Elemento } from "../../../types/Elementos/Elemento";

interface StockVencimientoProps {
  elementos: Elemento[];
}

const PIE_COLORS = ["#EF4444", "#FBBF24", "#10B981"]; // Rojo = crítico, Amarillo = alerta, Verde = seguro

export default function StockVencimiento({ elementos }: StockVencimientoProps) {
  const hoy = new Date();

  // Calcular días restantes y cantidades totales
  const elementosConDias = elementos.map((el) => {
    const venc = el.fechaVencimiento ? new Date(el.fechaVencimiento) : hoy;
    const diasRestantes = Math.max(
      0,
      Math.ceil((venc.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24))
    );
    const cantidadTotal =
      el.bodegaElementos?.reduce((sum, b) => sum + b.cantidad, 0) || 0;

    return { ...el, diasRestantes, cantidadTotal };
  });

  // 1. BarChart: productos más próximos a vencer
  const barData = [...elementosConDias]
    .sort((a, b) => a.diasRestantes - b.diasRestantes)
    .map((el) => ({
      nombreProducto: el.nombreElemento,
      diasRestantes: el.diasRestantes,
    }));

  // 2. PieChart: distribución por rangos de vencimiento
  let critico = 0,
    alerta = 0,
    seguro = 0;
  elementosConDias.forEach((el) => {
    if (el.diasRestantes <= 30) critico += el.cantidadTotal;
    else if (el.diasRestantes <= 90) alerta += el.cantidadTotal;
    else seguro += el.cantidadTotal;
  });

  const pieData = [
    { name: "Crítico (≤30 días)", value: critico },
    { name: "Alerta (31-90 días)", value: alerta },
    { name: "Seguro (>90 días)", value: seguro },
  ];

  // 3. StackedBarChart: stock por bodega con categorías de vencimiento
  const bodegasMap: Record<
    string,
    { critico: number; alerta: number; seguro: number }
  > = {};
  elementosConDias.forEach((el) => {
    el.bodegaElementos?.forEach((b) => {
      if (!bodegasMap[b.fkIdBodega.nombreBodega]) {
        bodegasMap[b.fkIdBodega.nombreBodega] = {
          critico: 0,
          alerta: 0,
          seguro: 0,
        };
      }
      if (el.diasRestantes <= 30)
        bodegasMap[b.fkIdBodega.nombreBodega].critico += b.cantidad;
      else if (el.diasRestantes <= 90)
        bodegasMap[b.fkIdBodega.nombreBodega].alerta += b.cantidad;
      else bodegasMap[b.fkIdBodega.nombreBodega].seguro += b.cantidad;
    });
  });

  

  // 4. LineChart: acumulación de vencimientos en el tiempo
  const lineData = elementosConDias.map((el) => ({
    fecha: el.fechaVencimiento || "Sin fecha",
    cantidad: el.cantidadTotal,
  }));
const stackedData = [
  { bodega: "Bodega A", categoria: "critico", value: 12 },
  { bodega: "Bodega A", categoria: "alerta", value: 8 },
  { bodega: "Bodega A", categoria: "seguro", value: 20 },
  { bodega: "Bodega B", categoria: "critico", value: 5 },
  { bodega: "Bodega B", categoria: "alerta", value: 15 },
  { bodega: "Bodega B", categoria: "seguro", value: 25 },
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* BarChart: productos por días restantes */}
      <CustomCard conten="Productos próximos a vencerse">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: "Días restantes", position: "insideBottom", offset: -5 }} />
            <YAxis dataKey="nombreProducto" type="category" />
            <Tooltip />
            <Bar dataKey="diasRestantes" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* PieChart: distribución por categorías */}
      <CustomCard conten="Distribución del stock por rango de vencimiento">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              label
            >
              {pieData.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={PIE_COLORS[index % PIE_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CustomCard>

     <CustomCard conten="Stock por vencimiento en Bodega A">
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={stackedData.filter(item => item.bodega === "Bodega A")} // 👈 filtra la bodega
        dataKey="value"
        nameKey="categoria"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
        label
      >
        <Cell key="critico" fill="#EF4444" />
        <Cell key="alerta" fill="#FBBF24" />
        <Cell key="seguro" fill="#10B981" />
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</CustomCard>

      {/* LineChart: evolución de vencimientos */}
      <CustomCard conten="Evolución de vencimientos en el tiempo">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cantidad" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
