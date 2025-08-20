import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";

export default function FormRol() {
  const permisos = [
    { label: "Crear Usuario", value: "Crear Usuario" },
    { label: "Editar Usuario", value: "Editar Usuario" },
    { label: "Eliminar Usuario", value: "Eliminar Usuario" },
  ];

  const usuarios = [
    { label: "Juan Pérez", value: "Juan Pérez" },
    { label: "Ana Torres", value: "Ana Torres" },
    { label: "Luis García", value: "Luis García" },
  ];

  return (
    <form className="space-y-6 w-full max-w-4xl mx-auto">
      {/* Primera fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          label="Nombre del Rol"
          type="text"
          placeholder="Ej: Administrador"
          width="100%"
        />

        <CustomInput
          label="ID del Rol"
          type="number"
          placeholder="Ej: 1"
          width="100%"
        />
      </div>

      {/* Segunda fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomSelect
          titulo="Permisos"
          planceholder="Seleccionar permisos"
          items={permisos}
          selectionMode="multiple"
          onChange={(value) => console.log("Permisos seleccionados:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />

        <CustomSelect
          titulo="Usuarios"
          planceholder="Seleccionar usuarios"
          items={usuarios}
          selectionMode="multiple"
          onChange={(value) => console.log("Usuarios seleccionados:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />
      </div>

    </form>
  );
}