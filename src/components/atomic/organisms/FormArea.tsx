import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";

export default function FormArea() {
  const sedes = [
    { label: "Lima", value: "Lima" },
    { label: "Arequipa", value: "Arequipa" },
    { label: "Cusco", value: "Cusco" },
  ];

  return (
    <form className="space-y-6 w-full max-w-4xl mx-auto">
      {/* Nombre del Área */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          label="Nombre del Área"
          type="text"
          placeholder="Ej: Tecnología"
          width="100%"
        />

        <CustomSelect
          titulo="Sede"
          planceholder="Seleccionar sede"
          items={sedes}
          selectionMode="single"
          variant="bordered"
          size="md"
          radius="md"
        />
      </div>
    </form>
  );
}
