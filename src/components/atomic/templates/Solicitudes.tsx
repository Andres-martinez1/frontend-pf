import { useState } from "react";
import { ClipboardDocumentListIcon, InformationCircleIcon } from "@heroicons/react/16/solid";
import CardTitulo from "../organisms/CardTitulo";
import CardSoli from "../organisms/CardSoli";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import BarraBusqueda from "../molecules/BarraBusqueda";
import CustomBoton from "../atoms/Boton";
import SolicitudesTable from "../organisms/SolicitudesTable";
import CustomPagination from "../molecules/Pagination";
import SolicitudesPend from "../organisms/SolicitudesPendiente";
import SolicitudesApro from "../organisms/SolicitudesAprobada";
import SolicitudesRecha from "../organisms/SolicitudesRechazada";

const Solicitudes = () => {
  const solicitudesData = [
    ["SOL-001", "María García", "maria.garcia@empresa.com", "Laptop UltraBook Pro", "TIC", "14/1/2024", "Pendiente", "Alta"],
    ["SOL-002", "Carlos Rodríguez", "carlos.rodriguez@empresa.com", "Batidora Industrial", "Gastronomía", "13/1/2024", "Aprobada", "Media"],
    ["SOL-003", "Ana Martínez", "ana.martinez@empresa.com", "Tractor Compacto", "Agropecuaria", "12/1/2024", "Rechazada", "Baja"],
    ["SOL-003", "Ana Martínez", "ana.martinez@empresa.com", "Tractor Compacto", "Agropecuaria", "12/1/2024", "Rechazada", "Baja"],
    ["SOL-003", "Ana Martínez", "ana.martinez@empresa.com", "Tractor Compacto", "Agropecuaria", "12/1/2024", "Rechazada", "Baja"],
    ["SOL-003", "Ana Martínez", "ana.martinez@empresa.com", "Tractor Compacto", "Agropecuaria", "12/1/2024", "Rechazada", "Baja"],
    ["SOL-004", "Pedro López", "pedro.lopez@empresa.com", "Proyector HD", "TIC", "11/1/2024", "Pendiente", "Alta"],
    ["SOL-004", "Pedro López", "pedro.lopez@empresa.com", "Proyector HD", "TIC", "11/1/2024", "Pendiente", "Alta"],
    ["SOL-004", "Pedro López", "pedro.lopez@empresa.com", "Proyector HD", "TIC", "11/1/2024", "Pendiente", "Alta"],
    ["SOL-004", "Pedro López", "pedro.lopez@empresa.com", "Proyector HD", "TIC", "11/1/2024", "Pendiente", "Alta"],
    ["SOL-005", "Lucía Torres", "lucia.torres@empresa.com", "Horno Industrial", "Gastronomía", "10/1/2024", "Aprobada", "Media"],
    ["SOL-005", "Lucía Torres", "lucia.torres@empresa.com", "Horno Industrial", "Gastronomía", "10/1/2024", "Aprobada", "Media"],
    ["SOL-005", "Lucía Torres", "lucia.torres@empresa.com", "Horno Industrial", "Gastronomía", "10/1/2024", "Aprobada", "Media"],
    ["SOL-005", "Lucía Torres", "lucia.torres@empresa.com", "Horno Industrial", "Gastronomía", "10/1/2024", "Aprobada", "Media"],
    ["SOL-006", "José Fernández", "jose.fernandez@empresa.com", "Camión Pequeño", "Logística", "09/1/2024", "Rechazada", "Baja"],
  ];

  const [filtroActivo, setFiltroActivo] = useState<"todas" | "pendientes" | "aprobadas" | "rechazadas">("todas");

  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const filteredData = solicitudesData.filter((solicitud) => {
    if (filtroActivo === "todas") return true;
    if (filtroActivo === "pendientes") return solicitud[6] === "Pendiente";
    if (filtroActivo === "aprobadas") return solicitud[6] === "Aprobada";
    if (filtroActivo === "rechazadas") return solicitud[6] === "Rechazada";
    return true;
  });

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <CardTitulo
        title="Gestión de Solicitudes"
        description="Administra y revisa las solicitudes de préstamos de equipos"
        icon={<ClipboardDocumentListIcon className="w-6 h-6 text-gray-700" />}
        iconBgColor="bg-gray-100"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardSoli
          title="Total Solicitudes"
          value={solicitudesData.length}
          icon={<InformationCircleIcon className="w-6 h-6 text-gray-700" />}
          className="transition-transform duration-200 hover:scale-105"
        />
        <CardSoli
          title="Pendientes"
          value={solicitudesData.filter((s) => s[6] === "Pendiente").length}
          icon={<Clock className="w-6 h-6 text-orange-500" />}
          iconBgColor="bg-orange-100"
          className="transition-transform duration-200 hover:scale-105"
        />
        <CardSoli
          title="Aprobadas"
          value={solicitudesData.filter((s) => s[6] === "Aprobada").length}
          icon={<CheckCircle className="w-6 h-6 text-green-500" />}
          iconBgColor="bg-green-100"
          className="transition-transform duration-200 hover:scale-105"
        />
        <CardSoli
          title="Rechazadas"
          value={solicitudesData.filter((s) => s[6] === "Rechazada").length}
          icon={<XCircle className="w-6 h-6 text-red-600" />}
          iconBgColor="bg-red-100"
          className="transition-transform duration-100 hover:scale-105"
        />
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 mt-4 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex-1">
            <BarraBusqueda />
          </div>
          <div className="flex flex-wrap gap-2">
            <CustomBoton titulo="Todas" bgColor="#9B9BD8" borderColor="#1A1A36" textColor="black" onClick={() => setFiltroActivo("todas")} />
            <CustomBoton titulo="Pendientes" bgColor="#FAD281" borderColor="#DB930B" textColor="black" onClick={() => setFiltroActivo("pendientes")} />
            <CustomBoton titulo="Aprobadas" bgColor="#BAFAB1" borderColor="#02B11C" textColor="black" onClick={() => setFiltroActivo("aprobadas")} />
            <CustomBoton titulo="Rechazadas" bgColor="#FEAAAA" borderColor="#D90B0B" textColor="black" onClick={() => setFiltroActivo("rechazadas")} />
          </div>
        </div>

        {filtroActivo === "todas" && <SolicitudesTable titulo="Solicitudes" data={currentData} />}
        {filtroActivo === "pendientes" && <SolicitudesPend titulo="Solicitudes Pendientes" data={currentData} />}
        {filtroActivo === "aprobadas" && <SolicitudesApro titulo="Solicitudes Aprobadas" data={currentData} />}
        {filtroActivo === "rechazadas" && <SolicitudesRecha titulo="Solicitudes Rechazadas" data={currentData} />}

        <div className="flex justify-end">
          <CustomPagination
            total={Math.ceil(filteredData.length / rowsPerPage)}
            page={page}
            onChange={setPage}
          />
        </div>
      </div>
    </>
  );
};

export default Solicitudes;
