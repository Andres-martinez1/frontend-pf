import { useState, useEffect, ChangeEvent, forwardRef, useImperativeHandle } from "react";
import CustomInput from "../molecules/Input";
import { Programa } from "../../../types/Programas/Programa";

interface FormEditProgramaProps {
  programaAEditar: Programa;
  onFormSubmit: (data: Programa) => void;
  isLoading?: boolean;
}

const FormEditPrograma = forwardRef(({ programaAEditar, onFormSubmit }: FormEditProgramaProps, ref) => {
  const [nombrePrograma, setNombrePrograma] = useState("");

  useEffect(() => {
    if (programaAEditar) {
      setNombrePrograma(programaAEditar.nombrePrograma);
    }
  }, [programaAEditar]);

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (!nombrePrograma.trim()) {
        alert("Por favor, completa el nombre del programa.");
        return;
      }

      const formData: Programa = {
        ...programaAEditar,
        nombrePrograma: nombrePrograma.trim(),
      };

      onFormSubmit(formData);
    },
  }));

  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto p-4">
      <div className="grid grid-cols-1 gap-6 items-start">
        <CustomInput
          label="Nombre del Programa"
          type="text"
          placeholder="Ej: Ingeniería de Sistemas"
          value={nombrePrograma}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNombrePrograma(e.target.value)}
          width="100%"
        />
      </div>
    </div>
  );
});

export default FormEditPrograma;
