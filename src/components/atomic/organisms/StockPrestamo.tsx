import CustomCard from "../molecules/Card";
import {
  ResponsiveContainer,
  Treemap,
  Tooltip,
  FunnelChart,
  Funnel,
  LabelList,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

export type Bodega = { idBodega: number; nombreBodega: string };
export type Elemento = { idElemento: number; nombreElemento: string };

export type BodegaElemento = {
  id: number;
  stockActual: number;
  stockMinimo: number | null;
  fkIdBodega: Bodega;
  fkIdElemento: Elemento;
  cantidadPrestada: number; // nueva propiedad para préstamo
};

interface StockPrestamoProps {
  productosPrestamo: BodegaElemento[];
}


export default function StockPrestamo({ productosPrestamo }: StockPrestamoProps) {
  const ejemploPrestamo = productosPrestamo.length
    ? productosPrestamo
    : [
        {
          id: 1,
          stockActual: 120,
          stockMinimo: 50,
          cantidadPrestada: 30,
          fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" },
          fkIdElemento: { idElemento: 1, nombreElemento: "Producto A" },
        },
        {
          id: 2,
          stockActual: 80,
          stockMinimo: 30,
          cantidadPrestada: 50,
          fkIdBodega: { idBodega: 2, nombreBodega: "Bodega Secundaria" },
          fkIdElemento: { idElemento: 2, nombreElemento: "Producto B" },
        },
      ];

  // Datos para Treemap
  const treemapData = ejemploPrestamo.map((be) => ({
    name: be.fkIdElemento.nombreElemento,
    size: be.cantidadPrestada,
  }));

  // Datos para FunnelChart
  const funnelData = ejemploPrestamo.map((be) => ({
    name: be.fkIdElemento.nombreElemento,
    value: be.cantidadPrestada,
  }));

  // Datos para ScatterChart
  const scatterData = ejemploPrestamo.map((be) => ({
    x: be.stockActual,
    y: be.cantidadPrestada,
    name: be.fkIdElemento.nombreElemento,
  }));

  // Datos para RadarChart
  const radarData = ejemploPrestamo.map((be) => ({
    subject: be.fkIdElemento.nombreElemento,
    A: be.cantidadPrestada,
    fullMark: be.stockActual,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Treemap: distribución de productos en préstamo */}
      <CustomCard conten="Distribución de productos prestados">
        <ResponsiveContainer width="100%" height={250}>
          <Treemap
            data={treemapData}
            dataKey="size"
            stroke="#fff"
            fill="#8884d8"
          >
            <Tooltip />
          </Treemap>
        </ResponsiveContainer>
      </CustomCard>

      {/* FunnelChart: flujo de préstamos */}
      <CustomCard conten="Cantidad de préstamos por producto">
        <ResponsiveContainer width="100%" height={250}>
          <FunnelChart>
            <Tooltip />
            <Funnel
              dataKey="value"
              data={funnelData}
              isAnimationActive
              label={(entry) => entry.name}
            >
              <LabelList position="inside" fill="#fff" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* ScatterChart: relación stock vs préstamo */}
      <CustomCard conten="Relación stock vs préstamo">
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="Stock Disponible" />
            <YAxis type="number" dataKey="y" name="Cantidad Prestada" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Productos" data={scatterData} fill="#F59E0B" />
          </ScatterChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* RadarChart: comparación de productos con más préstamos */}
      <CustomCard conten="Comparación de préstamos vs stock">
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Cantidad Prestada"
              dataKey="A"
              stroke="#EF4444"
              fill="#EF4444"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
