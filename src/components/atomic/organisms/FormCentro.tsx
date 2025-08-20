import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import CustomTextarea from "../molecules/Textarea";

export default function FormCentro() {
  const municipios = [
    { label: "Bogotá", value: "Bogotá" },
    { label: "Medellín", value: "Medellín" },
    { label: "Cali", value: "Cali" },
    { label: "Barranquilla", value: "Barranquilla" },
  ];

  const sedes = [
    { label: "Sede Norte", value: "Sede Norte" },
    { label: "Sede Sur", value: "Sede Sur" },
    { label: "Sede Central", value: "Sede Central" },
  ];

  return (
    <form className="space-y-6 w-full max-w-4xl mx-auto">
      {/* Primera fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          label="Nombre del Centro"
          type="text"
          placeholder="Ej: Centro de Innovación Tecnológica"
          width="100%"
        />

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
      </div>

      {/* Segunda fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <CustomInput
          label="Código del Centro"
          type="text"
          placeholder="Ej: CEN-001"
          width="100%"
        />
      </div>

      {/* Descripción */}
      <CustomTextarea
        titulo="Descripción"
        placeholder="Describe el propósito, enfoque y servicios del centro..."
      />

      {/* Imagen */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Imagen del Centro
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
          <div className="text-center">
            <input type="file" accept="image/*" className="hidden" id="imagen" />
            <label htmlFor="imagen" className="cursor-pointer text-blue-600">
              Arrastra una imagen aquí o selecciona un archivo
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}