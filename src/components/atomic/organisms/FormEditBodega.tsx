import { useState, useEffect, ChangeEvent, forwardRef, useImperativeHandle } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import { Bodega } from "../../../types/Bodegas/Bodega";
import { Sede } from "../../../types/Sedes/Sede";
import { Usuario } from "../../../types/Usuarios/Usuario";

interface FormEditBodegaProps {
  bodegaAEditar: Bodega;
  sedesDisponibles: Sede[];
  usuariosDisponibles: Usuario[];
  onFormSubmit: (data: Bodega) => void;
  isLoading?: boolean;
}

const FormEditBodega = forwardRef((
  { bodegaAEditar, sedesDisponibles, usuariosDisponibles, onFormSubmit }: FormEditBodegaProps,
  ref
) => {
  // Campos editables
  const [nombreBodega, setNombreBodega] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [capacidad, setCapacidad] = useState<number | "">("");
  const [sedeIdSeleccionada, setSedeIdSeleccionada] = useState<string>("");
  const [usuarioIdSeleccionado, setUsuarioIdSeleccionado] = useState<string>("");

  // Imagen (archivo + preview) – último campo
  const [, setImgFile] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string>("");

  useEffect(() => {
    if (bodegaAEditar) {
      setNombreBodega(bodegaAEditar.nombreBodega);
      setDescripcion(bodegaAEditar.descripcion ?? "");
      setCapacidad(bodegaAEditar.capacidadMaxima ?? "");
      setSedeIdSeleccionada(String(bodegaAEditar.fkIdSede.idSedes));
      setUsuarioIdSeleccionado(String(bodegaAEditar.fkIdUsuario.idUsuario));
      setPreviewImg(bodegaAEditar.img ?? "");
    }
  }, [bodegaAEditar]);

  const opcionesSede = sedesDisponibles.map((sede) => ({
    label: sede.nombreSede,
    value: String(sede.idSedes),
  }));

  const opcionesUsuario = usuariosDisponibles.map((user) => ({
    label: user.nombreUsuario,
    value: String(user.idUsuario),
  }));

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImgFile(file);
    if (file) {
      const urlPreview = URL.createObjectURL(file);
      setPreviewImg(urlPreview);
    }
  };

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (!nombreBodega.trim() || !sedeIdSeleccionada || !usuarioIdSeleccionado) {
        alert("Por favor, completa todos los campos requeridos.");
        return;
      }

      const sedeCompleta = sedesDisponibles.find(
        (s) => s.idSedes === Number(sedeIdSeleccionada)
      );
      const usuarioCompleto = usuariosDisponibles.find(
        (u) => u.idUsuario === Number(usuarioIdSeleccionado)
      );

      if (!sedeCompleta || !usuarioCompleto) {
        alert("Datos inválidos.");
        return;
      }

      const formData: Bodega = {
        ...bodegaAEditar,
        nombreBodega,
        descripcion,
        capacidadMaxima: capacidad === "" ? null : Number(capacidad),
        img: previewImg || null, // si tienes upload real, aquí puedes sustituir por base64 o URL final
        fkIdSede: sedeCompleta,
        fkIdUsuario: usuarioCompleto,
      };

      onFormSubmit(formData);
    },
  }));

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* 1. Nombre Bodega */}
        <CustomInput
          label="Nombre de la Bodega"
          type="text"
          placeholder="Ej: Bodega Central"
          value={nombreBodega}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNombreBodega(e.target.value)}
          width="100%"
        />

        {/* 2. Capacidad Máxima */}
        <CustomInput
          label="Capacidad Máxima"
          type="number"
          placeholder="Ej: 5000"
          value={capacidad}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCapacidad(e.target.value === "" ? "" : Number(e.target.value))
          }
          width="100%"
        />

        {/* 3. Descripción (ocupa 2 columnas) */}
        <div className="md:col-span-2">
          <CustomInput
            label="Descripción"
            type="text"
            placeholder="Ej: Bodega de insumos médicos"
            value={descripcion}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDescripcion(e.target.value)}
            width="100%"
          />
        </div>

        {/* 4. Sede */}
        <CustomSelect
          titulo="Sede"
          planceholder="Seleccionar sede"
          items={opcionesSede}
          selectionMode="single"
          variant="bordered"
          size="md"
          radius="md"
          onChange={(value: string) => setSedeIdSeleccionada(value)}
        />

        {/* 5. Usuario Responsable */}
        <CustomSelect
          titulo="Usuario Responsable"
          planceholder="Seleccionar usuario"
          items={opcionesUsuario}
          selectionMode="single"
          variant="bordered"
          size="md"
          radius="md"
          onChange={(value: string) => setUsuarioIdSeleccionado(value)}
        />
        {/* 8. Imagen (último campo, ocupa 2 columnas) */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Imagen de la Bodega
          </label>
          <div className="mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
           
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="imagen"
              onChange={handleFileChange}
            />
            <label
              htmlFor="imagen"
              className="cursor-pointer text-blue-600 hover:underline"
            >
              Arrastra una imagen aquí o selecciona un archivo
            </label>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FormEditBodega;
