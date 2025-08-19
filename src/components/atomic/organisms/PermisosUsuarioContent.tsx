import { useState } from "react";
import {
  Eye,
  Plus,
  Pencil,
  Trash2,
  ChevronDown,
  ChevronUp,
  Users,
} from "lucide-react";
import CustomBoton from "../atoms/Boton";

type Permiso = {
  id: string;
  nombre: string;
  descripcion: string;
  icon: JSX.Element;
  color: string;
};

type Modulo = {
  id: string;
  nombre: string;
  descripcion: string;
  icon?: JSX.Element;
};

type ModalPermisosProps = {
  usuario: string;
  modulos: Modulo[];
};

const PERMISOS_DEFAULT: Omit<Permiso, "id">[] = [
  {
    nombre: "Ver",
    descripcion: "Consultar registros",
    icon: <Eye size={16} />,
    color: "text-blue-600",
  },
  {
    nombre: "Crear",
    descripcion: "Agregar nuevos registros",
    icon: <Plus size={16} />,
    color: "text-green-600",
  },
  {
    nombre: "Editar",
    descripcion: "Modificar registros existentes",
    icon: <Pencil size={16} />,
    color: "text-yellow-600",
  },
  {
    nombre: "Eliminar",
    descripcion: "Eliminar registros",
    icon: <Trash2 size={16} />,
    color: "text-red-600",
  },
];

export default function ModalPermisos({ modulos }: ModalPermisosProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const togglePermiso = (moduloId: string, permisoId: string) => {
    setSelected((prev) => {
      const current = prev[moduloId] || [];
      const updated = current.includes(permisoId)
        ? current.filter((p) => p !== permisoId)
        : [...current, permisoId];
      return { ...prev, [moduloId]: updated };
    });
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-400">
        Configure los permisos CRUD específicos para cada módulo del sistema
      </p>

      <div className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-base font-semibold text-blue-800 mb-3">
          Tipos de Permisos
        </h2>
        <div className="flex flex-wrap gap-3">
          <span className="flex items-center gap-3 ml-5 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium w-[130px] border border-blue-700">
            <Eye size={16} /> Ver
          </span>
          <span className="flex items-center gap-3 ml-5 px-4 py-2 rounded-lg bg-green-50 text-green-600 text-sm font-medium w-[130px] border border-green-700">
            <Plus size={16} /> Crear
          </span>
          <span className="flex items-center gap-3 ml-5 px-4 py-2 rounded-lg bg-yellow-50 text-yellow-600 text-sm font-medium w-[130px] border border-yellow-700">
            <Pencil size={16} /> Editar
          </span>
          <span className="flex items-center gap-3 ml-5 px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium w-[130px] border border-red-700">
            <Trash2 size={16} /> Eliminar
          </span>
        </div>
      </div>

      {modulos.map((modulo) => {
        const permisosModulo: Permiso[] = PERMISOS_DEFAULT.map((p) => ({
          id: `${modulo.id}-${p.nombre.toLowerCase()}`,
          ...p,
        }));

        return (
          <div
            key={modulo.id}
            className="border rounded-lg bg-white shadow-sm"
          >
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-3">
                {modulo.icon || <Users className="text-blue-700" />}
                <div>
                  <h4 className="font-semibold">{modulo.nombre}</h4>
                  <p className="text-sm text-gray-500">{modulo.descripcion}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {permisosModulo.map(
                  (perm) =>
                    selected[modulo.id]?.includes(perm.id) && (
                      <span key={perm.id} className={`${perm.color}`}>
                        {perm.icon}
                      </span>
                    )
                )}
               <CustomBoton
                      titulo={expanded === modulo.id ? "Ocultar" : "Ver detalles"}
                      icon={
                        expanded === modulo.id ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )
                      }
                      onClick={() => toggleExpand(modulo.id)}
                      bgColor="#f0f9ff"
                      textColor="#1d4ed8"
                      borderColor="#1d4ed8"
                      hoverBgColor="#dbeafe"
                      size="sm"
                      radius="md"
                    />
              </div>
            </div>

            {expanded === modulo.id && (
              <div className="border-t px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                {permisosModulo.map((perm) => {
                  const isChecked = selected[modulo.id]?.includes(perm.id);
                  return (
                    <label
                      key={perm.id}
                      className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer transition ${
                        isChecked
                          ? "bg-blue-50 border-blue-400"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => togglePermiso(modulo.id, perm.id)}
                        className="h-4 w-4 text-blue-600 accent-blue-600"
                      />
                      <span className="flex items-center gap-3 text-sm text-gray-700">
                        <span className={perm.color}>{perm.icon}</span>
                        <span>
                          <strong>{perm.nombre}:</strong> {perm.descripcion}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
