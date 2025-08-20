import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import CustomTextarea from "../molecules/Textarea";

export default function FormBodega() {
  const encargados = [
    { label: "Diego Calderon", value: "Diego Calderon" },
    { label: "María López", value: "Maria Lopez" },
    { label: "Carlos Ramírez", value: "Carlos Ramirez" },
  ];

  const sedes = [
    { label: "Lima", value: "Lima" },
    { label: "Arequipa", value: "Arequipa" },
    { label: "Cusco", value: "Cusco" },
  ];

  return (
    <form className="space-y-6 w-full max-w-4xl mx-auto">
      {/* Primera fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          label="Nombre de la Bodega"
          type="text"
          placeholder="Ej: Bodega Principal"
          width="100%"
        />

        <CustomInput
          label="Capacidad Máxima"
          type="number"
          placeholder="1000"
          width="100%"
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

        <CustomSelect
          titulo="Encargado"
          planceholder="Seleccionar encargado"
          items={encargados}
          selectionMode="single"
          onChange={(value) => console.log("Encargado seleccionado:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />
      </div>

      {/* Descripción */}
      <CustomTextarea
        titulo="Descripción"
        placeholder="Describe el propósito y contenido de la bodega..."
      />

      {/* Imagen */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Imagen de la Bodega
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
          <div className="text-center">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="imagen"
            />
            <label
              htmlFor="imagen"
              className="cursor-pointer text-blue-600"
            >
              Arrastra una imagen aquí o selecciona un archivo
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}
