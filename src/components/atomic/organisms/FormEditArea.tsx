import { useState, useEffect, ChangeEvent, forwardRef, useImperativeHandle } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import { Area } from "../../../types/Areas/Area";

interface Sede {
  idSedes: number;
  nombreSede: string;
}

interface FormEditAreaProps {
  areaAEditar: Area;
  sedesDisponibles: Sede[];
  onFormSubmit: (data: Area) => void;
  isLoading?: boolean;
}

const FormEditArea = forwardRef(({ 
  areaAEditar, 
  sedesDisponibles, 
  onFormSubmit}: FormEditAreaProps, ref) => {
  const [nombreArea, setNombreArea] = useState("");
  const [sedeIdSeleccionada, setSedeIdSeleccionada] = useState<string>("");

  useEffect(() => {
    if (areaAEditar) {
      setNombreArea(areaAEditar.nombreArea);
      setSedeIdSeleccionada(String(areaAEditar.fkIdSedes.idSedes));
    }
  }, [areaAEditar]);

  const opcionesSede = sedesDisponibles.map((sede) => ({
    label: sede.nombreSede,
    value: String(sede.idSedes),
  }));

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (!nombreArea.trim() || !sedeIdSeleccionada) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      const sedeCompleta = sedesDisponibles.find(
        (s) => s.idSedes === Number(sedeIdSeleccionada)
      );
      if (!sedeCompleta) {
        alert("La sede seleccionada no es válida.");
        return;
      }

      const formData: Area = {
        ...areaAEditar,
        nombreArea,
        fkIdSedes: sedeCompleta,
      };

      onFormSubmit(formData);
    },
  }));

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <CustomInput
          label="Nombre del Área"
          type="text"
          placeholder="Ej: Tecnología"
          value={nombreArea}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNombreArea(e.target.value)}
          width="100%"
        />
        <CustomSelect
          titulo="Sede"
          planceholder="Seleccionar sede"
          items={opcionesSede}
          selectionMode="single"
          variant="bordered"
          size="md"
          radius="md"
          onChange={(value: string) => setSedeIdSeleccionada(value)}
        />
      </div>
    </div>
  );
});

export default FormEditArea;
