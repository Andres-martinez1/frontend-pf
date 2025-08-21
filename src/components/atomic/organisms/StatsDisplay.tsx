import React from "react";
import CardEstadisticas from "../organisms/CardEstadisticas";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  tipo: string | null;
  estado: string | null;
};

// Ejemplo simple de gráfico
const InventarioActivos = () => {
  const data = [
    { name: "Producto A", stock: 40 },
    { name: "Producto B", stock: 30 },
  ];
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="stock" fill="#4f46e5" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const StatsDisplay: React.FC<Props> = ({ tipo, estado }) => {
  if (!tipo || !estado) return null;

  const componentMap: Record<string, Record<string, JSX.Element>> = {
    inventario: {
      activos: <InventarioActivos />,
      critico: <div>Stock Crítico</div>,
      bajo: <div>Stock Bajo</div>,
      disponibles: <div>Disponibles</div>,
      prestamo: <div>En Préstamo</div>,
    },
    vencimientos: {
      critico: <div>Vencimientos Críticos</div>,
      urgente: <div>Vencimientos Urgentes</div>,
      proximo: <div>Vencimientos Próximos</div>,
      normal: <div>Vencimientos Normales</div>,
    },
    movimientos: {
      alta: <div>Alta Rotación</div>,
      media: <div>Media Rotación</div>,
      baja: <div>Baja Rotación</div>,
      sin: <div>Sin Movimientos</div>,
    },
    eficiencia: {
      alta: <div>Alta Eficiencia</div>,
      media: <div>Media Eficiencia</div>,
      baja: <div>Baja Eficiencia</div>,
      movimiento: <div>Alto Movimiento</div>,
    },
  };

  const content = componentMap[tipo]?.[estado] || null;

  return (
    <CardEstadisticas
      icon={null}
      titulo="Resultados del Análisis"
      descripcion="Aquí se muestran las estadísticas según la selección de filtros"
      features={[]}
    >
      {content}
    </CardEstadisticas>
  );
};

export default StatsDisplay;
