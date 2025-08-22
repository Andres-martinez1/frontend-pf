import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar } from "recharts";

export default function ProductosActivos() {
  // Datos de prueba (mock)
  const dataCategorias = [
    { name: "Electrónicos", value: 120 },
    { name: "Muebles", value: 90 },
    { name: "Herramientas", value: 60 },
    { name: "Herramientas", value: 60 },
    { name: "Herramientas", value: 60 },
    { name: "Herramientas", value: 60 },
    { name: "Herramientas", value: 60 },
    { name: "Otros", value: 30 },
  ];

  const dataDisponibilidad = [
    { name: "Disponibles", value: 220 },
    { name: "Prestados", value: 80 },
  ];

  const dataTopProductos = [
    { name: "Laptop", cantidad: 50 },
    { name: "Silla", cantidad: 40 },
    { name: "Proyector", cantidad: 30 },
    { name: "Mesa", cantidad: 20 },
    { name: "Mesa", cantidad: 20 },
    { name: "Mesa", cantidad: 20 },
    { name: "Mesa", cantidad: 20 },
    { name: "Mesa", cantidad: 20 },
  ];

  const dataTendencia = [
    { mes: "Ene", activos: 180 },
    { mes: "Feb", activos: 200 },
    { mes: "Mar", activos: 220 },
    { mes: "Abr", activos: 210 },
    { mes: "May", activos: 230 },
  ];

  const COLORS = ["#0077B6", "#00B4D8", "#90E0EF", "#03045E", "#CAF0F8"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Gráfica 1: Activos por Categoría */}
      <div className="bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Productos Activos por Categoría</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataCategorias}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0077B6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfica 2: Disponibilidad (Pie) */}
      <div className="bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Disponibilidad de Productos</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataDisponibilidad}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {dataDisponibilidad.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

 {/* Gráfica 3: Top 5 Productos (Radar) */}
<div className="bg-white shadow-lg rounded-2xl p-4">
  <h2 className="text-lg font-semibold mb-4 text-gray-700">Top 5 Productos Activos</h2>
  <ResponsiveContainer width="100%" height={300}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataTopProductos}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar name="Cantidad" dataKey="cantidad" stroke="#00B4D8" fill="#00B4D8" fillOpacity={0.6} />
      <Tooltip />
    </RadarChart>
  </ResponsiveContainer>
</div>
      {/* Gráfica 4: Tendencia mensual */}
      <div className="bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Tendencia de Activos por Mes</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dataTendencia}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="activos" stroke="#03045E" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
