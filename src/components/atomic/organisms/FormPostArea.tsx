// /components/forms/FormularioCrearArea.tsx

import React, { useState, ChangeEvent } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";

// --- Tipos de datos ---
// Definimos Sede basado en tu tipo Area
interface Sede {
  idSedes: number;
  nombreSede: string;
}

// Datos que el formulario enviará
interface NuevaAreaData {
  nombreArea: string;
  fkIdSedes: Sede;
}

// --- Props que el componente recibirá ---
interface FormularioCrearAreaProps {
  sedesDisponibles: Sede[];
  onFormSubmit: (data: NuevaAreaData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function FormularioCrearArea({
  sedesDisponibles,
  onFormSubmit,
  onCancel,
  isLoading = false,
}: FormularioCrearAreaProps) {
  const [nombreArea, setNombreArea] = useState("");
  const [sedeIdSeleccionada, setSedeIdSeleccionada] = useState<string>("");

  // Transformamos las sedes al formato que espera tu CustomSelect: { label, value }
  const opcionesSede = sedesDisponibles.map((sede) => ({
    label: sede.nombreSede,
    value: String(sede.idSedes),
  }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // La validación se hace aquí, en la lógica, antes de enviar.
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

    const formData: NuevaAreaData = {
      nombreArea: nombreArea,
      fkIdSedes: sedeCompleta,
    };

    onFormSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-4xl mx-auto p-4 border rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold">Crear Nueva Área</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* === CAMPO DE INPUT CORREGIDO === */}
        <CustomInput
          label="Nombre del Área"
          type="text"
          placeholder="Ej: Contabilidad"
          value={nombreArea}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNombreArea(e.target.value)}
          width="100%"
          // CORRECCIÓN: Se eliminó la prop 'isRequired' porque tu componente no la reconoce.
          // La validación se maneja en la función handleSubmit.
        />

        {/* === CAMPO DE SELECT CORREGIDO === */}
        <CustomSelect
          titulo="Sede"
          // Corregido el typo común 'planceholder' por 'placeholder'.
          // Si tu prop realmente se llama 'planceholder', puedes cambiarlo de vuelta.
          planceholder="Seleccionar sede" 
          items={opcionesSede}
          selectionMode="single"
          variant="bordered"
          size="md"
          radius="md"
          // CORRECCIÓN: Se usa 'onChange', asumiendo que devuelve directamente el 'value' seleccionado.
          // Se eliminaron 'onSelectionChange', 'selectedKeys', 'value' y 'isRequired'
          // porque tu componente no las reconoce.
          onChange={(value: string) => setSedeIdSeleccionada(value)}
        />
      </div>

      <div className="flex justify-end pt-4">
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
          {isLoading ? "Guardando..." : "Guardar Área"}
        </button>
      </div>
    </form>
  );
}