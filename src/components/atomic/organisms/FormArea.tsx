import { useState, ChangeEvent } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";

type FormAreaProps = {
  onSubmit?: (data: { nombreArea: string; sede: string }) => void;
};

export default function FormArea({ onSubmit }: FormAreaProps) {
  const [formData, setFormData] = useState({
    nombreArea: "",
    sede: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      sede: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    console.log(" Datos enviados:", formData);
  };

  return (
    <form
      className="flex flex-col gap-4 p-2"
      onSubmit={handleSubmit}
    >
      <CustomInput
        label="Nombre del Área"
        type="text"
        placeholder="Ej: Tecnología"
        value={formData.nombreArea}
        onChange={handleChange}
        width="full"
      />

      <CustomSelect
        titulo="Sede"
        planceholder="Seleccione una sede"
        items={[
          { label: "Lima", value: "lima" },
          { label: "Arequipa", value: "arequipa" },
          { label: "Cusco", value: "cusco" },
        ]}
        selectionMode="single"
        onChange={handleSelectChange}
        width="full"

/>

    </form>
  );
}
