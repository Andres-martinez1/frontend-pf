import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import CustomTextarea from "../molecules/Textarea";

export default function FormProducto() {
  const categorias = [
    { label: "Audio", value: "audio" },
    { label: "Fotografía", value: "fotografia" },
    { label: "Computación", value: "computacion" },
    { label: "Audiovisual", value: "audiovisual" },
    { label: "Electrónica", value: "electronica" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Nombre del Producto</label>
        <CustomInput label="Nombre del Producto" type="text" width="full"/>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Categoría</label>
        <CustomSelect
          titulo="Categoría"
          planceholder="Seleccionar categoría"
          items={categorias}
          selectionMode="single"
        />
      </div>

      <div className="md:col-span-2 flex flex-col">
        <label className="text-sm font-medium mb-1">Descripción</label>
        <CustomTextarea
          placeholder="Ingresa una breve descripción del producto"
          titulo="Descripción" className="w-full"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Stock</label>
        <CustomInput label="Cantidad en Stock" type="number" width="full"/>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Ubicación</label>
        <CustomInput label="Ubicación" type="text"  width="full"/>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Número de Serie</label>
        <CustomInput label="Número de Serie" type="text" width="full" />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Marca</label>
        <CustomInput label="Marca" type="text" width="full"/>
      </div>

      <div className="md:col-span-2 flex flex-col">
        <label className="text-sm font-medium mb-1">Imagen del Producto</label>
        <CustomInput type="file" className="w-full border px-3 py-2 rounded-lg" label={""} width="full" />
      </div>
    </div>
  );
}
