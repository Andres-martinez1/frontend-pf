import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from "recharts";
import CustomCard from "../molecules/Card";

export default function DashboardGraficas() {
  // Datos mock
  const stockUrgente = [
    { nombre: "Leche", stock: 30, diasRestantes: 5 },
    { nombre: "Yogurt", stock: 20, diasRestantes: 3 },
    { nombre: "Pan", stock: 50, diasRestantes: 10 },
    { nombre: "Queso", stock: 15, diasRestantes: 2 },
  ];

  const productosCercanos = [
    { nombre: "Leche", diasRestantes: 5 },
    { nombre: "Yogurt", diasRestantes: 3 },
    { nombre: "Queso", diasRestantes: 2 },
    { nombre: "Mantequilla", diasRestantes: 8 },
  ];

  const stockGeneral = [
    { nombre: "Leche", stock: 120 },
    { nombre: "Yogurt", stock: 80 },
    { nombre: "Pan", stock: 200 },
    { nombre: "Queso", stock: 50 },
  ];

  const vencimientoMensual = [
    { mes: "Enero", vencidos: 12 },
    { mes: "Febrero", vencidos: 8 },
    { mes: "Marzo", vencidos: 15 },
    { mes: "Abril", vencidos: 6 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Stock Urgente */}
      <CustomCard conten={""} >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stockUrgente}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill="#0077B6" name="Stock" />
            <Bar dataKey="diasRestantes" fill="#FF4D4D" name="Días Restantes" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Productos próximos a vencer */}
      <CustomCard conten={""} >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productosCercanos}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="diasRestantes" fill="#FFB703" name="Días Restantes" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Stock General */}
      <CustomCard conten={""} >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stockGeneral}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill="#00B4D8" name="Stock" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>

      {/* Vencimientos por mes */}
      <CustomCard conten={""} >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={vencimientoMensual}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="vencidos" stroke="#03045E" name="Productos Vencidos" />
          </LineChart>
        </ResponsiveContainer>
      </CustomCard>
    </div>
  );
}
