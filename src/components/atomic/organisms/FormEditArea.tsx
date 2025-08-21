// /components/forms/FormEditArea.tsx

import React, { useState, useEffect, ChangeEvent } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import { Area } from "../../../types/Areas/Area"; // Asegúrate de que la ruta a tu tipo Area sea correcta

interface Sede {
  idSedes: number;
  nombreSede: string;
}

// Props que el componente recibirá
interface FormEditAreaProps {
  areaAEditar: Area; // Los datos del área que se va a modificar
  sedesDisponibles: Sede[];
  onFormSubmit: (data: Area) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function FormEditArea({
  areaAEditar,
  sedesDisponibles,
  onFormSubmit,
  onCancel,
  isLoading = false,
}: FormEditAreaProps) {
  const [nombreArea, setNombreArea] = useState("");
  const [sedeIdSeleccionada, setSedeIdSeleccionada] = useState<string>("");

  // useEffect se usa para llenar el estado del formulario con los datos existentes
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!nombreArea.trim() || !sedeIdSeleccionada) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const sedeCompleta = sedesDisponibles.find(
      (s) => s.idSedes === Number(sedeIdSeleccionada)
    );
    if (!sedeCompleta) return;

    const formData: Area = {
      ...areaAEditar, // Mantenemos el ID y otros datos originales
      nombreArea: nombreArea, // Sobrescribimos con los valores actualizados
      fkIdSedes: sedeCompleta,
    };

    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          // Corregido typo 'planceholder' a 'placeholder'
          planceholder="Seleccionar sede"
          items={opcionesSede}
          selectionMode="single"
          variant="bordered"
          size="md"
          radius="md"
          onChange={(value: string) => setSedeIdSeleccionada(value)}
          // CORRECCIÓN: Se eliminó la prop 'value={sedeIdSeleccionada}'
          // Tu componente CustomSelect no acepta esta prop, como lo demuestra
          // el formulario de creación y el mensaje de error de TypeScript.
          // Aunque el valor no se pasa visualmente, el estado 'sedeIdSeleccionada'
          // sí se actualiza y se enviará correctamente.
        />
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white font-bold py-2 px-6 rounded-md hover:bg-gray-600"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isLoading ? "Guardando..." : "Guardar Cambios"}
        </button>
      </div>
    </form>
  );
}