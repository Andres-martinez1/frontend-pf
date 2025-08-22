import { useState, ChangeEvent, forwardRef, useImperativeHandle } from "react";
import CustomInput from "../molecules/Input";

export type MunicipioPostData = {
  nombreMunicipio: string;
};

interface FormularioCrearMunicipioProps {
  onFormSubmit: (data: MunicipioPostData) => void;
}

const FormPostMunicipio = forwardRef((props: FormularioCrearMunicipioProps, ref) => {
  const { onFormSubmit } = props;

  const [nombreMunicipio, setNombreMunicipio] = useState("");

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (!nombreMunicipio.trim()) {
        alert("Por favor, completa el nombre del municipio.");
        return;
      }

      onFormSubmit({
        nombreMunicipio: nombreMunicipio.trim(),
      });
    },
  }));

  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto p-4">
      <CustomInput
        label="Nombre del Municipio"
        type="text"
        placeholder="Ej: Bogotá"
        value={nombreMunicipio}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNombreMunicipio(e.target.value)}
        width="100%"
      />
    </div>
  );
});

export default FormPostMunicipio;
