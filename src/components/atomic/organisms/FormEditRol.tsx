// FormEditRol.tsx
import { forwardRef, useImperativeHandle, useState, ChangeEvent, useEffect } from "react";
import CustomInput from "../molecules/Input";
import { Rol } from "../../../types/Roles/Rol";

interface FormEditRolProps {
  rolAEditar: Rol;
  onFormSubmit: (data: Rol) => void; // <-- ahora recibe el idRol incluido
  isLoading?: boolean;
}

const FormEditRol = forwardRef(({ rolAEditar, onFormSubmit }: FormEditRolProps, ref) => {
  const [nombreRol, setNombreRol] = useState("");

  useEffect(() => {
    if (rolAEditar) setNombreRol(rolAEditar.nombreRol);
  }, [rolAEditar]);

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (!nombreRol.trim()) {
        alert("Por favor, completa el nombre del rol.");
        return;
      }

      onFormSubmit({
        ...rolAEditar,
        nombreRol,
      });
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

export default FormEditRol;
