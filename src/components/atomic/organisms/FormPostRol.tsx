import { forwardRef, useImperativeHandle, useState, ChangeEvent } from "react";
import CustomInput from "../molecules/Input";
import { RolPostData } from "../../../types/Roles/RolPost";

// 1️⃣ Definir el tipo de ref
export interface FormRolRef {
  submitForm: () => void;
}

// 2️⃣ Definir las props del componente
interface FormPostRolProps {
  onFormSubmit: (data: RolPostData) => void;
}

// 3️⃣ Crear el componente con forwardRef tipado
const FormPostRol = forwardRef<FormRolRef, FormPostRolProps>(({ onFormSubmit }, ref) => {
  const [nombreRol, setNombreRol] = useState("");

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (!nombreRol.trim()) {
        alert("El nombre del rol es obligatorio");
        return;
      }
      onFormSubmit({ nombreRol });
    },
  }));

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto p-4">
      <CustomInput
        label="Nombre del Rol"
        type="text"
        placeholder="Ej: Administrador"
        value={nombreRol}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNombreRol(e.target.value)}
        width="100%"
      />
    </div>
  );
});

export default FormPostRol;
