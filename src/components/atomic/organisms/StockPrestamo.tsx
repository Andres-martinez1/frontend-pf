import CustomCard from "../molecules/Card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

export type Bodega = { idBodega: number; nombreBodega: string };
export type Elemento = { idElemento: number; nombreElemento: string };

export type BodegaElemento = {
  id: number;
  stockActual: number;
  stockMinimo: number | null;
  fkIdBodega: Bodega;
  fkIdElemento: Elemento;
  cantidadPrestada: number;
};

interface StockPrestamoProps {
  productosPrestamo: BodegaElemento[];
}

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

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
        {
          id: 3,
          stockActual: 60,
          stockMinimo: 20,
          cantidadPrestada: 15,
          fkIdBodega: { idBodega: 1, nombreBodega: "Bodega Central" },
          fkIdElemento: { idElemento: 3, nombreElemento: "Producto C" },
        },
      ];

  // Comparación préstamo vs stock
  const barData = ejemploPrestamo.map((be) => ({
    nombreProducto: be.fkIdElemento.nombreElemento,
    prestado: be.cantidadPrestada,
    stock: be.stockActual,
  }));

  // Distribución de préstamos
  const pieData = ejemploPrestamo.map((be) => ({
    name: be.fkIdElemento.nombreElemento,
    value: be.cantidadPrestada,
  }));

  // Tendencia (simulada con índice como fecha)
  const lineData = ejemploPrestamo.map((be, index) => ({
    fecha: `Registro ${index + 1}`,
    cantidadPrestada: be.cantidadPrestada,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Comparación: préstamo vs stock */}
      <CustomCard conten="Préstamos vs stock por producto">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="prestado" fill="#EF4444" name="Cantidad Prestada" />
            <Bar dataKey="stock" fill="#3B82F6" name="Stock Disponible" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Distribución total de préstamos */}
      <CustomCard conten="Distribución de préstamos por producto">
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
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Evolución de préstamos */}
      <CustomCard conten="Evolución de préstamos en el tiempo">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="cantidadPrestada"
              stroke="#F59E0B"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Stock vs Préstamos apilados */}
      <CustomCard conten="Proporción stock disponible vs préstamos">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData} stackOffset="sign">
            <XAxis dataKey="nombreProducto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" stackId="a" fill="#3B82F6" name="Stock Disponible" />
            <Bar dataKey="prestado" stackId="a" fill="#EF4444" name="Cantidad Prestada" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
