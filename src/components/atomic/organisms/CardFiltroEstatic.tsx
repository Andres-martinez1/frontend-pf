import { useState } from "react";
import CustomBoton from "../atoms/Boton";
import CustomCard from "../molecules/Card";
import CustomSelect from "../molecules/Select";
import CustomInput from "../molecules/Input";
import {
  FunnelIcon,
  ArrowPathIcon,
  ClipboardDocumentListIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const tiposAnalisis = [
  { value: "inventario", label: "Inventario y Stock", icon: ClipboardDocumentListIcon },
  { value: "vencimientos", label: "Vencimientos y Alertas", icon: ExclamationTriangleIcon },
  { value: "movimientos", label: "Movimientos y Rotaciones", icon: ChartBarIcon },
  { value: "eficiencia", label: "Eficiencia y Rendimiento", icon: FunnelIcon },
];

const estadosEspecificos: Record<string, { value: string; label: string }[]> = {
  inventario: [
    { value: "activos", label: "Productos Activos" },
    { value: "critico", label: "Stock Crítico" },
    { value: "bajo", label: "Stock Bajo" },
    { value: "disponibles", label: "Disponibles" },
    { value: "prestamo", label: "En Préstamo" },
  ],
  vencimientos: [
    { value: "critico", label: "Crítico" },
    { value: "urgente", label: "Urgente" },
    { value: "proximo", label: "Próximo" },
    { value: "normal", label: "Normal" },
  ],
  movimientos: [
    { value: "alta", label: "Alta Rotación" },
    { value: "media", label: "Media Rotación" },
    { value: "baja", label: "Baja Rotación" },
    { value: "sin", label: "Sin Movimientos" },
  ],
  eficiencia: [
    { value: "alta", label: "Alta Eficiencia" },
    { value: "media", label: "Media Eficiencia" },
    { value: "baja", label: "Baja Eficiencia" },
    { value: "movimiento", label: "Alto Movimiento" },
  ],
};

type Props = {
  setTipo?: (val: string | null) => void;
  setEstado?: (val: string | null) => void;
};


export default function CardFiltroE({ setTipo: setTipoParent, setEstado: setEstadoParent }: Props) {
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState<string | null>(null);
  const [estado, setEstado] = useState<string | null>(null);

  const progreso = [busqueda, tipo, estado].filter(Boolean).length;

  return (
    <div className="p-4">
      <CustomCard className="p-6 bg-white shadow-md rounded-xl border border-gray-200" conten={""}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gray-100 border border-gray-300 flex-shrink-0">
            <FunnelIcon className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Filtros Progresivos Inteligentes</h2>
            <p className="text-sm text-gray-500">Configure su análisis paso a paso para obtener insights precisos</p>
          </div>
        </div>

        {/* Filtros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Búsqueda */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">1</span>
              <span className="text-sm font-medium text-gray-700">Búsqueda Global</span>
            </div>
            <CustomInput
              type="search"
              placeholder="ID o nombre de bodega"
              value={busqueda}
              onChange={(e: any) => setBusqueda(e.target.value)}
              label={""}
            />
          </div>

          {/* Tipo de Análisis */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-xs font-bold">2</span>
              <span className="text-sm font-medium text-gray-700">Tipo de Análisis</span>
            </div>
            <CustomSelect
              titulo=""
              planceholder="Selecciona tipo"
              items={tiposAnalisis.map((t) => ({ value: t.value, label: t.label }))}
              onChange={(val: string) => {
                setTipo(val);
                setEstado(null);
                if (setTipoParent) setTipoParent(val);
                if (setEstadoParent) setEstadoParent(null);
              }}
              selectionMode={"single"}
              disabled={!busqueda}
            />
          </div>

          {/* Estado Específico */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-xs font-bold">3</span>
              <span className="text-sm font-medium text-gray-700">Estado Específico</span>
            </div>
            <CustomSelect
              titulo=""
              planceholder="Selecciona estado"
              items={tipo ? estadosEspecificos[tipo] : []}
              onChange={(val: string) => {
                setEstado(val);
                if (setEstadoParent) setEstadoParent(val);
              }}
              disabled={!tipo}
              selectionMode={"single"}
            />
          </div>
        </div>

        {/* Progreso */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>Progreso de configuración</span>
            <span>{progreso}/3 pasos completados</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-600 rounded-full transition-all" style={{ width: `${(progreso / 3) * 100}%` }} />
          </div>
        </div>

        {/* Tags */}
        {progreso > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {busqueda && <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">Búsqueda: {busqueda}</span>}
            {tipo && <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">{tiposAnalisis.find((t) => t.value === tipo)?.label}</span>}
            {estado && <span className="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full">{estadosEspecificos[tipo!].find((e) => e.value === estado)?.label}</span>}
          </div>
        )}

        {/* Botones */}
        <div className="flex justify-end gap-3 mt-4">
          <CustomBoton
            titulo="Generar Análisis"
            icon={<RocketLaunchIcon className="w-5 h-5" />}
            disabled={progreso < 3}
          />
          <CustomBoton
            titulo="Limpiar"
            textColor="black"
            icon={<ArrowPathIcon className="w-5 h-5 text-gray-950" />}
            bgColor="white"
            borderColor="black"
            onClick={() => {
              setBusqueda("");
              setTipo(null);
              setEstado(null);
              if (setTipoParent) setTipoParent(null);
              if (setEstadoParent) setEstadoParent(null);
            }}
          />
        </div>
      </CustomCard>
    </div>
  );
}
