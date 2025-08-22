import { useState, ChangeEvent, forwardRef, useImperativeHandle } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import { Sede } from "../../../types/Sedes/Sede";
import { Usuario } from "../../../types/Usuarios/Usuario";

export interface NuevaBodegaData {
  nombreBodega: string;
  descripcion: string | null;
  capacidadMaxima: number | null;
  img: string | null;
  fkIdSede: Sede;
  fkIdUsuario: Usuario;
}

interface FormularioCrearBodegaProps {
  sedesDisponibles: Sede[];
  usuariosDisponibles: Usuario[];
  onFormSubmit: (data: NuevaBodegaData) => void;
}

const FormPostBodega = forwardRef((props: FormularioCrearBodegaProps, ref) => {
  const { sedesDisponibles, usuariosDisponibles, onFormSubmit } = props;

  const [nombreBodega, setNombreBodega] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [capacidad, setCapacidad] = useState<number | "">("");
  const [sedeIdSeleccionada, setSedeIdSeleccionada] = useState<string>("");
  const [usuarioIdSeleccionado, setUsuarioIdSeleccionado] = useState<string>("");

  const [, setImgFile] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string>("");

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
        alert("Por favor, completa todos los campos obligatorios.");
        return;
      }

      const sedeCompleta = sedesDisponibles.find(
        (s) => s.idSedes === Number(sedeIdSeleccionada)
      );
      const usuarioCompleto = usuariosDisponibles.find(
        (u) => u.idUsuario === Number(usuarioIdSeleccionado)
      );

      if (!sedeCompleta || !usuarioCompleto) {
        alert("Sede o usuario inválido.");
        return;
      }

      onFormSubmit({
        nombreBodega,
        descripcion,
        capacidadMaxima: capacidad ? Number(capacidad) : null,
        img: previewImg || null, // guardamos el preview/base64 en este ejemplo
        fkIdSede: sedeCompleta,
        fkIdUsuario: usuarioCompleto,
      });
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

        {/* 3. Descripción */}
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
            {previewImg && (
              <img
                src={previewImg}
                alt="Preview"
                className="mb-4 max-h-40 rounded-lg shadow-md object-contain"
              />
            )}
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

export default FormPostBodega;
