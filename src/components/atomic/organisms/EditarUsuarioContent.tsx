import { useState } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";

export default function EditarUser() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    rol: "Administrador",
    area: "",
    estado: "Activo",
    contrasena: "",
  });

  return (
    <div className="space-y-8">
      <div className="space-y-6 bg-white p-6 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre Completo
            </label>
            <CustomInput
              placeholder="Nombre Completo"
              type="text"
              width="full"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
              label={""}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <CustomInput
              placeholder="Correo Electrónico"
              type="email"
              width="full"
              value={formData.correo}
              onChange={(e) =>
                setFormData({ ...formData, correo: e.target.value })
              }
              label={""}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rol de Usuario
            </label>
            <CustomSelect
              items={[
                { label: "Administrador", value: "Administrador" },
                { label: "Líder", value: "Líder" },
                { label: "Instructor", value: "Instructor" },
                { label: "Pasante", value: "Pasante" },
              ]}
              selectionMode="single"
              onChange={(value) => setFormData({ ...formData, rol: value })}
              titulo={""}
              planceholder={"Seleccione un rol"}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Área de Trabajo
            </label>
            <CustomInput
              placeholder="Área de Trabajo"
              type="text"
              width="full"
              value={formData.area}
              onChange={(e) =>
                setFormData({ ...formData, area: e.target.value })
              }
              label={""}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Estado del Usuario
            </label>
            <CustomSelect
              items={[
                { label: "Activo", value: "Activo" },
                { label: "Inactivo", value: "Inactivo" },
              ]}
              selectionMode="single"
              onChange={(value) => setFormData({ ...formData, estado: value })}
              titulo={""}
              planceholder={"Seleccione un estado"}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <CustomInput
              placeholder="Escribe la contraseña"
              type="password"
              value={formData.contrasena}
              width="full"
              onChange={(e) =>
                setFormData({ ...formData, contrasena: e.target.value })
              }
              label={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
