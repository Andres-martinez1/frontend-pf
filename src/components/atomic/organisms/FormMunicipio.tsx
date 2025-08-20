import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import CustomTextarea from "../molecules/Textarea";

export default function FormMunicipio() {
  // Centros de ejemplo (pueden venir de una API)
  const centros = [
    { label: "Centro Industrial", value: "Centro Industrial" },
    { label: "Centro Tecnológico", value: "Centro Tecnológico" },
    { label: "Centro Agropecuario", value: "Centro Agropecuario" },
  ];

  // Fichas de ejemplo (pueden venir de una API)
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
          label="Nombre del Municipio"
          type="text"
          placeholder="Ej: Bogotá"
          width="530px"
        />

      </div>

      {/* Segunda fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomSelect
          titulo="Centros"
          planceholder="Seleccionar centros"
          items={centros}
          selectionMode="multiple"
          onChange={(value) => console.log("Centros seleccionados:", value)}
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

      
    </form>
  );
}