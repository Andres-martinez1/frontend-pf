import { useState, useRef } from "react";
import CustomCard from "../molecules/Card";
import CustomBoton from "../atoms/Boton";
import CustomInput from "../molecules/Input";

type Props = {
  nombre: string;
  usuario: string;
  rol: string;
  onEditar: () => void;
  onCerrarSesion: () => void;
};

export function CardPerfilUsuario({
  nombre,
  usuario,
  rol,
  onEditar,
  onCerrarSesion,
}: Props) {
  const [imagenPreview, setImagenPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagenPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <CustomCard conten="">
      <div className="flex flex-col items-center">
        <div className="w-[594px] h-44 bg-slate-900 rounded-t-lg -mt-6 mb-4" />

        <div
          className="relative -mt-16 w-44 h-44 rounded-full border-4 border-white bg-gray-200 cursor-pointer overflow-hidden"
          onClick={() => fileInputRef.current?.click()}
        >
          {imagenPreview ? (
            <img
              src={imagenPreview}
              alt="Preview"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              + Foto
            </div>
          )}

          <CustomInput
            label=""
            type="file"
            inputRef={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <h2 className="text-lg font-semibold mt-3">{nombre}</h2>
        <p className="text-sm text-gray-500">@{usuario}</p>
        <span className="mt-2 text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
          {rol}
        </span>

        <div className="flex gap-2 mt-4">
          <CustomBoton
            titulo="Editar Perfil"
            bgColor="#1e293b"
            onPress={onEditar}
            size="sm"
          />
          <CustomBoton
            titulo="Cerrar Sesión"
            textColor="#dc2626"
            bgColor="#ffffff"
            onPress={onCerrarSesion}
            size="sm"
          />
        </div>
      </div>
    </CustomCard>
  );
}
