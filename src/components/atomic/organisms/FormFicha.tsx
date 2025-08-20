import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import CustomTextarea from "../molecules/Textarea";

export default function FormFicha() {
  const municipios = [
    { label: "Bogotá", value: "Bogotá" },
    { label: "Medellín", value: "Medellín" },
    { label: "Cali", value: "Cali" },
  ];

  const programas = [
    { label: "Desarrollo de Software", value: "Desarrollo de Software" },
    { label: "Gestión Empresarial", value: "Gestión Empresarial" },
    { label: "Electrónica", value: "Electrónica" },
  ];

  const sedes = [
    { label: "Sede Norte", value: "Sede Norte" },
    { label: "Sede Centro", value: "Sede Centro" },
    { label: "Sede Sur", value: "Sede Sur" },
  ];

  const usuarios = [
    { label: "Juan Pérez", value: "Juan Pérez" },
    { label: "Laura Gómez", value: "Laura Gómez" },
    { label: "Andrés Rodríguez", value: "Andrés Rodríguez" },
  ];

  return (
    <form className="space-y-6 w-full max-w-4xl mx-auto">
      {/* Primera fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          label="Número de Ficha"
          type="text"
          placeholder="Ej: 2567890"
          width="100%"
        />

        <CustomSelect
          titulo="Programa"
          planceholder="Seleccionar programa"
          items={programas}
          selectionMode="single"
          onChange={(value) => console.log("Programa seleccionado:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />
      </div>

      {/* Segunda fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomSelect
          titulo="Municipio"
          planceholder="Seleccionar municipio"
          items={municipios}
          selectionMode="single"
          onChange={(value) => console.log("Municipio seleccionado:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />

        <CustomSelect
          titulo="Sede"
          planceholder="Seleccionar sede"
          items={sedes}
          selectionMode="single"
          onChange={(value) => console.log("Sede seleccionada:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />
      </div>

      {/* Usuarios */}
      <CustomSelect
        titulo="Usuarios"
        planceholder="Seleccionar usuarios"
        items={usuarios}
        selectionMode="multiple"
        onChange={(value) => console.log("Usuarios seleccionados:", value)}
        variant="bordered"
        size="md"
        radius="md"
        width="530px"
      />
    </form>
  );
}