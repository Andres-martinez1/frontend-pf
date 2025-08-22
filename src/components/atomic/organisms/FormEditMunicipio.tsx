import { useState, useEffect, ChangeEvent, forwardRef, useImperativeHandle } from "react";
import CustomInput from "../molecules/Input";
import { Municipio } from "../../../types/Municipios/Municipio";

interface FormEditMunicipioProps {
  municipioAEditar: Municipio;
  onFormSubmit: (data: Municipio) => void;
  isLoading?: boolean;
}

const FormEditMunicipio = forwardRef(({ municipioAEditar, onFormSubmit }: FormEditMunicipioProps, ref) => {
  const [nombreMunicipio, setNombreMunicipio] = useState("");

  useEffect(() => {
    if (municipioAEditar) {
      setNombreMunicipio(municipioAEditar.nombreMunicipio);
    }
  }, [municipioAEditar]);

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (!nombreMunicipio.trim()) {
        alert("Por favor, completa el nombre del municipio.");
        return;
      }

      const formData: Municipio = {
        ...municipioAEditar,
        nombreMunicipio: nombreMunicipio.trim(),
      };

      onFormSubmit(formData);
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

export default FormEditMunicipio;
