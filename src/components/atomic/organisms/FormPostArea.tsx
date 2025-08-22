import { useState, ChangeEvent, forwardRef, useImperativeHandle } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";

interface Sede {
  idSedes: number;
  nombreSede: string;
}

export interface NuevaAreaData {
  nombreArea: string;
  fkIdSedes: Sede;
}

interface FormularioCrearAreaProps {
  sedesDisponibles: Sede[];
  onFormSubmit: (data: NuevaAreaData) => void;
}

const FormPostArea = forwardRef((props: FormularioCrearAreaProps, ref) => {
  const { sedesDisponibles, onFormSubmit } = props;

  const [nombreArea, setNombreArea] = useState("");
  const [sedeIdSeleccionada, setSedeIdSeleccionada] = useState<string>("");

  const opcionesSede = sedesDisponibles.map((sede) => ({
    label: sede.nombreSede,
    value: String(sede.idSedes),
  }));

  // Exponemos un método para que el modal pueda "guardar"
  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (!nombreArea.trim() || !sedeIdSeleccionada) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
      }

      const sedeCompleta = sedesDisponibles.find(
        (s) => s.idSedes === Number(sedeIdSeleccionada)
      );

      if (!sedeCompleta) {
        alert("La sede seleccionada no es válida.");
        return;
      }

      onFormSubmit({
        nombreArea,
        fkIdSedes: sedeCompleta,
      });
    },
  }));

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <CustomInput
          label="Nombre del Área"
          type="text"
          placeholder="Ej: Contabilidad"
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
          width="full"
          onChange={(value: string) => setSedeIdSeleccionada(value)}
        />
      </div>
    </div>
  );
});

export default FormPostArea;
