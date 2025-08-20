import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import CustomTextarea from "../molecules/Textarea";

export default function FormSede() {
  const centros = [
    { label: "Centro Tecnológico Norte", value: "Centro Tecnológico Norte" },
    { label: "Centro Industrial Sur", value: "Centro Industrial Sur" },
    { label: "Centro Agropecuario", value: "Centro Agropecuario" },
  ];

  const areas = [
    { label: "Área de Sistemas", value: "Área de Sistemas" },
    { label: "Área de Mecánica", value: "Área de Mecánica" },
    { label: "Área de Electrónica", value: "Área de Electrónica" },
  ];

  const bodegas = [
    { label: "Bodega Principal", value: "Bodega Principal" },
    { label: "Bodega Secundaria", value: "Bodega Secundaria" },
  ];

  const fichas = [
    { label: "Ficha 101", value: "Ficha 101" },
    { label: "Ficha 202", value: "Ficha 202" },
    { label: "Ficha 303", value: "Ficha 303" },
  ];

  return (
    <form className="space-y-6 w-full max-w-4xl mx-auto">
      {/* Primera fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          label="Nombre de la Sede"
          type="text"
          placeholder="Ej: Sede Central"
          width="100%"
        />

        <CustomInput
          label="ID de la Sede"
          type="number"
          placeholder="Ej: 1"
          width="100%"
        />
      </div>

      {/* Segunda fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomSelect
          titulo="Centro"
          planceholder="Seleccionar centro"
          items={centros}
          selectionMode="single"
          onChange={(value) => console.log("Centro seleccionado:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />

        <CustomSelect
          titulo="Áreas"
          planceholder="Seleccionar áreas"
          items={areas}
          selectionMode="multiple"
          onChange={(value) => console.log("Áreas seleccionadas:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />
      </div>

      {/* Tercera fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomSelect
          titulo="Bodegas"
          planceholder="Seleccionar bodegas"
          items={bodegas}
          selectionMode="multiple"
          onChange={(value) => console.log("Bodegas seleccionadas:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />

        <CustomSelect
          titulo="Fichas"
          planceholder="Seleccionar fichas"
          items={fichas}
          selectionMode="multiple"
          onChange={(value) => console.log("Fichas seleccionadas:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />
      </div>

      {/* Descripción */}
      <CustomTextarea
        titulo="Descripción"
        placeholder="Describe detalles adicionales de la sede..."
      />
    </form>
  );
}