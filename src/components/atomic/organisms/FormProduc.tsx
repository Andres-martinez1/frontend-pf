import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import CustomTextarea from "../molecules/Textarea";

export default function FormElemento() {
  const clasificaciones = [
    { label: "Herramienta", value: "Herramienta" },
    { label: "Material", value: "Material" },
    { label: "Equipo", value: "Equipo" },
  ];

  const estados = [
    { label: "Nuevo", value: "Nuevo" },
    { label: "Usado", value: "Usado" },
    { label: "Dañado", value: "Dañado" },
  ];

  const tipos = [
    { label: "Eléctrico", value: "Eléctrico" },
    { label: "Mecánico", value: "Mecánico" },
    { label: "Otro", value: "Otro" },
  ];

  const unidades = [
    { label: "Unidad", value: "Unidad" },
    { label: "Caja", value: "Caja" },
    { label: "Paquete", value: "Paquete" },
    { label: "Litros", value: "Litros" },
  ];

  const bodegas = [
    { label: "Bodega Principal", value: "1" },
    { label: "Bodega Norte", value: "2" },
    { label: "Bodega Sur", value: "3" },
  ];

  return (
    <form className="space-y-6 w-full max-w-4xl mx-auto">
      {/* Primera fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          label="Nombre del Elemento"
          type="text"
          placeholder="Ej: Taladro eléctrico"
          width="100%"
        />

        <CustomSelect
          titulo="Clasificación"
          planceholder="Seleccionar clasificación"
          items={clasificaciones}
          selectionMode="single"
          onChange={(value) => console.log("Clasificación seleccionada:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />
      </div>

      {/* Segunda fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          label="Número de Serie"
          type="text"
          placeholder="Ej: SN-12345"
          width="100%"
        />

        <CustomSelect
          titulo="Estado"
          planceholder="Seleccionar estado"
          items={estados}
          selectionMode="single"
          onChange={(value) => console.log("Estado seleccionado:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />
      </div>

      {/* Tercera fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomSelect
          titulo="Tipo"
          planceholder="Seleccionar tipo"
          items={tipos}
          selectionMode="single"
          onChange={(value) => console.log("Tipo seleccionado:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />

        <CustomInput
          label="Marca"
          type="text"
          placeholder="Ej: Bosch"
          width="100%"
        />
      </div>

      {/* Cuarta fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomSelect
          titulo="Unidad de Medida"
          planceholder="Seleccionar unidad"
          items={unidades}
          selectionMode="single"
          onChange={(value) => console.log("Unidad seleccionada:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />

        <CustomInput
          label="Fecha de Vencimiento"
          type="date"
          placeholder="yyyy-mm-dd"
          width="100%"
        />
      </div>

      {/* Quinta fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomSelect
          titulo="Bodega"
          planceholder="Seleccionar bodega"
          items={bodegas}
          selectionMode="single"
          onChange={(value) => console.log("Bodega seleccionada:", value)}
          variant="bordered"
          size="md"
          radius="md"
        />

        <CustomInput
          label="Cantidad"
          type="number"
          placeholder="Ej: 10"
          width="100%"
        />
      </div>

      {/* Descripción */}
      <CustomTextarea
        titulo="Descripción"
        placeholder="Describe las características, uso o detalles adicionales del elemento..."
      />

      {/* Imagen */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Imagen del Elemento
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