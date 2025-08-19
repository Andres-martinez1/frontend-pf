import CustomInput from "../molecules/Input";
import CustomTextarea from "../molecules/Textarea";
import CustomDatePicker from "../molecules/DatePicker";

export default function FormSolicitud() {
  return (
    <form className="space-y-4 text-sm text-[#0f172a]">
      {/* Producto */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium mb-1">Producto</label>
        <p className="bg-[#f1f5f9] px-4 py-3 rounded-xl font-serif">Auriculares NoiseGuard</p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 mb-3">
            <label className="text-sm font-medium mb-1">Cantidad Dsiponible</label>
          <CustomInput
            label="Cantidad Disponible"
            type="text"
          />
        </div>
        <div className="flex-1 mb-3">
                        <label className="text-sm font-medium mb-1">Cantidad a solicitar</label>
          <CustomInput label="Cantidad a Solicitar" type="text" />
        </div>
      </div>

            <div className="flex gap-4">

       <div className="flex-1 mb-3">
      <label className="text-sm font-medium mb-1">Nombre del solicitante</label>
      <CustomInput label="Solicitante" type="text" />
</div>
       <div className="flex-1 mb-3">
      <label className="text-sm font-medium mb-1">Departamento del solicitante</label>
      <CustomInput label="Departamento" type="text" />
</div>
</div>
      <div className="relative mb-3">
        <label className="text-sm font-medium mb-1">Fecha de devolución </label>
        <CustomDatePicker conten={""} width="w-full"></CustomDatePicker>
      </div>

      <div className="mb-3">
        <label className="text-sm font-medium  mb-3">Notas</label>
      <CustomTextarea
        titulo="Notas"
        placeholder="Notas adicionales"
        className="w-full mt-3"
      />
      </div>
    </form>
  );
}
