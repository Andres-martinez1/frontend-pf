import React, { useState, ChangeEvent } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import { Sede } from "../../../types/Sedes/Sede";
import { Usuario } from "../../../types/Usuarios/Usuario";

// --- Tipos de datos para el formulario ---
interface NuevaBodegaData {
  nombreBodega: string;
  descripcion: string | null;
  capacidadMaxima: number | null;
  fkIdSede: Sede;
  fkIdUsuario: Usuario;
}

interface FormularioCrearBodegaProps {
  sedesDisponibles?: Sede[];
  usuariosDisponibles?: Usuario[]; // La lista de usuarios se recibe aquí
  onFormSubmit: (data: NuevaBodegaData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

// Se aplican valores por defecto para evitar errores si las props no llegan
export default function FormularioCrearBodega({
  sedesDisponibles = [],
  usuariosDisponibles = [], // Si no se recibe, es un array vacío por defecto
  onFormSubmit,
  onCancel,
  isLoading = false,
}: FormularioCrearBodegaProps) {
  const [nombreBodega, setNombreBodega] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [capacidadMaxima, setCapacidadMaxima] = useState("");
  const [sedeIdSeleccionada, setSedeIdSeleccionada] = useState<string>("");
  const [usuarioIdSeleccionado, setUsuarioIdSeleccionado] = useState<string>("");

  // Mapea las sedes para el componente Select
  const opcionesSede = sedesDisponibles.map((sede) => ({
    label: sede.nombreSede,
    value: String(sede.idSedes),
  }));

  // --- PUNTO CLAVE ---
  // Aquí se mapean los usuarios recibidos para mostrarlos en el selector.
  // Si 'usuariosDisponibles' está vacío, 'opcionesUsuario' también lo estará.
  const opcionesUsuario = usuariosDisponibles.map((usuario) => ({
    label: `${usuario.nombres} ${usuario.apellidos}`,
    value: String(usuario.idUsuario),
  }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!nombreBodega.trim() || !sedeIdSeleccionada || !usuarioIdSeleccionado) {
      alert("Por favor, completa los campos obligatorios: Nombre, Sede y Usuario.");
      return;
    }
    const sedeCompleta = sedesDisponibles.find((s) => s.idSedes === Number(sedeIdSeleccionada));
    const usuarioCompleto = usuariosDisponibles.find((u) => u.idUsuario === Number(usuarioIdSeleccionado));
    if (!sedeCompleta || !usuarioCompleto) {
      alert("La sede o el usuario seleccionado no es válido.");
      return;
    }
    const formData: NuevaBodegaData = {
      nombreBodega,
      descripcion: descripcion || null,
      capacidadMaxima: capacidadMaxima ? Number(capacidadMaxima) : null,
      fkIdSede: sedeCompleta,
      fkIdUsuario: usuarioCompleto,
    };
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold">Crear Nueva Bodega</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <CustomInput
          label="Nombre de la Bodega"
          type="text"
          placeholder="Ej: Bodega Central de Insumos"
          value={nombreBodega}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNombreBodega(e.target.value)}
          width="100%"
        />
        <CustomInput
          label="Descripción (Opcional)"
          type="text"
          placeholder="Ej: Para materiales de ferretería"
          value={descripcion}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDescripcion(e.target.value)}
          width="100%"
        />
        <CustomInput
          label="Capacidad Máxima (Opcional)"
          type="number"
          placeholder="Ej: 1000"
          value={capacidadMaxima}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCapacidadMaxima(e.target.value)}
          width="100%"
        />
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
        <CustomSelect
          titulo="Usuario Responsable"
          planceholder="Seleccionar usuario" // Corregido: 'placeholder' en lugar de 'planceholder'
          items={opcionesUsuario} // Los items vienen de la lista de usuarios
          selectionMode="single"
          variant="bordered"
          size="md"
          radius="md"
          onChange={(value: string) => setUsuarioIdSeleccionado(value)}
        />
      </div>
      <div className="flex justify-end gap-2 pt-4">
        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-md hover:bg-gray-300">
          Cancelar
        </button>
        <button type="submit" disabled={isLoading} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 disabled:bg-gray-400">
          {isLoading ? "Guardando..." : "Guardar Bodega"}
        </button>
      </div>
    </form>
  );
}