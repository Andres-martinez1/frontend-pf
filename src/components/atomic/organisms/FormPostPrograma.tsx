import { useState, ChangeEvent, forwardRef, useImperativeHandle } from "react";
import CustomInput from "../molecules/Input";
import { ProgramaPostData } from "../../../types/Programas/ProgramaPost";

interface FormularioCrearProgramaProps {
  onFormSubmit: (data: ProgramaPostData) => void;
}

const FormPostPrograma = forwardRef((props: FormularioCrearProgramaProps, ref) => {
  const { onFormSubmit } = props;

  const [nombrePrograma, setNombrePrograma] = useState("");

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (!nombrePrograma.trim()) {
        alert("Por favor, ingresa el nombre del programa.");
        return;
      }

      onFormSubmit({
        nombrePrograma,
      });
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

export default FormPostPrograma;
