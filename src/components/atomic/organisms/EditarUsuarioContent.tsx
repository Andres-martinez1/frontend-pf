import { useState, useEffect } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";

// Define un tipo para los datos del formulario, igual al de CreateUser.
type FormData = {
  nombre: string;
  apellidos: string;
  identificacion: string;
  correo: string;
  contrasena: string;
  img?: string | null;
  estado: string;
  ubicacion: string;
  fechaIngreso?: string | null;
  habilidadesTecnicas: string;
  rol: string;
  area: string;
  fkIdArea?: { idArea: number };
  fkIdRol?: { idRol: number };
};

// Define las props que el componente recibirá.
interface EditarUserProps {
  usuario: FormData; // El usuario a editar
  onClose: () => void; // Función para cerrar el modal
}

export default function EditarUser({ usuario }: EditarUserProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellidos: "",
    identificacion: "",
    correo: "",
    contrasena: "",
    img: "",
    estado: "Activo",
    ubicacion: "",
    fechaIngreso: "",
    habilidadesTecnicas: "",
    rol: "",
    area: "",
  });

  useEffect(() => {
    if (usuario) {
      const fechaFormateada = usuario.fechaIngreso
        ? new Date(usuario.fechaIngreso).toISOString().split('T')[0]
        : "";
      
      setFormData({
        ...usuario,
        fechaIngreso: fechaFormateada,
        contrasena: "",
      });
    }
  }, [usuario]);

  return (
    <div className="space-y-8">
      <div className="space-y-6 bg-white p-6 rounded-xl shadow-md">
        {/* ... (Todos los campos de tipo CustomInput permanecen igual) ... */}

        {/* Nombre y Apellidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <CustomInput placeholder="Nombre" type="text" width="full" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} label={""} />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos</label>
                <CustomInput placeholder="Apellidos" type="text" width="full" value={formData.apellidos} onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })} label={""} />
            </div>
        </div>
        
        {/* Identificación y Correo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Identificación</label>
                <CustomInput placeholder="Identificación" type="text" width="full" value={formData.identificacion} onChange={(e) => setFormData({ ...formData, identificacion: e.target.value })} label={""} />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <CustomInput placeholder="Correo Electrónico" type="email" width="full" value={formData.correo} onChange={(e) => setFormData({ ...formData, correo: e.target.value })} label={""} />
            </div>
        </div>

        {/* Rol y Área (Inputs de texto) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rol de Usuario</label>
                <CustomInput placeholder="Rol de Usuario" type="text" width="full" value={formData.rol} onChange={(e) => setFormData({ ...formData, rol: e.target.value })} label={""} />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Área de Trabajo</label>
                <CustomInput placeholder="Área de Trabajo" type="text" width="full" value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} label={""} />
            </div>
        </div>

        {/* Estado y Contraseña */}
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
              value={formData.estado} // CAMBIO: Usar 'value' en lugar de 'selectedKey'
              onChange={(value) => setFormData({ ...formData, estado: value })}
              titulo={""}
              planceholder={"Seleccione un estado"}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nueva Contraseña
            </label>
            <CustomInput
              placeholder="Dejar en blanco para no cambiar"
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

        {/* Ubicación y Fecha de Ingreso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
                <CustomInput placeholder="Ubicación" type="text" width="full" value={formData.ubicacion} onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })} label={""} />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Ingreso</label>
                <CustomInput placeholder="Fecha de Ingreso" type="date" width="full" value={formData.fechaIngreso || ""} onChange={(e) => setFormData({ ...formData, fechaIngreso: e.target.value })} label={""} />
            </div>
        </div>

        {/* Habilidades Técnicas e Imagen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Habilidades Técnicas</label>
                <CustomInput placeholder="Habilidades Técnicas" type="text" width="full" value={formData.habilidadesTecnicas} onChange={(e) => setFormData({ ...formData, habilidadesTecnicas: e.target.value })} label={""} />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Imagen (URL)</label>
                <CustomInput placeholder="URL de la imagen" type="text" width="full" value={formData.img || ""} onChange={(e) => setFormData({ ...formData, img: e.target.value })} label={""} />
            </div>
        </div>
        
        {/* Área y Rol (Selects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Área (Select)
            </label>
            <CustomSelect
              items={[] /* Aquí irían las áreas de tu API */}
              selectionMode="single"
              value={String(formData.fkIdArea?.idArea || "")} // CAMBIO: Usar 'value' en lugar de 'selectedKey'
              onChange={(value) =>
                setFormData({ ...formData, fkIdArea: { idArea: Number(value) } })
              }
              titulo={""}
              planceholder={"Seleccione un área"}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rol (Select)
            </label>
            <CustomSelect
              items={[] /* Aquí irían los roles de tu API */}
              selectionMode="single"
              value={String(formData.fkIdRol?.idRol || "")} // CAMBIO: Usar 'value' en lugar de 'selectedKey'
              onChange={(value) =>
                setFormData({ ...formData, fkIdRol: { idRol: Number(value) } })
              }
              titulo={""}
              planceholder={"Seleccione un rol"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}