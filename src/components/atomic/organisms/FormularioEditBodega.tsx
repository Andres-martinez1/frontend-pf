import React, { useState, useEffect, ChangeEvent } from "react";
import CustomInput from "../molecules/Input";
import CustomSelect from "../molecules/Select";
import { Bodega } from "../../../types/Bodegas/Bodega";
import { Sede } from "../../../types/Sedes/Sede";
import { Usuario } from "../../../types/Usuarios/Usuario";

interface FormularioEditBodegaProps {
  bodegaAEditar: Bodega;
  sedesDisponibles?: Sede[];
  usuariosDisponibles?: Usuario[]; // La lista de usuarios también se recibe aquí
  onFormSubmit: (data: Bodega) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function FormularioEditBodega({
  bodegaAEditar,
  sedesDisponibles = [],
  usuariosDisponibles = [], // Valor por defecto
  onFormSubmit,
  onCancel,
  isLoading = false,
}: FormularioEditBodegaProps) {
  const [nombreBodega, setNombreBodega] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [capacidadMaxima, setCapacidadMaxima] = useState("");
  const [sedeIdSeleccionada, setSedeIdSeleccionada] = useState<string>("");
  const [usuarioIdSeleccionado, setUsuarioIdSeleccionado] = useState<string>("");

  useEffect(() => {
    if (bodegaAEditar) {
      setNombreBodega(bodegaAEditar.nombreBodega);
      setDescripcion(bodegaAEditar.descripcion || "");
      setCapacidadMaxima(String(bodegaAEditar.capacidadMaxima || ""));
      setSedeIdSeleccionada(String(bodegaAEditar.fkIdSede.idSedes));
      // Asegurarse de que el usuario exista antes de establecer el ID
      if (bodegaAEditar.fkIdUsuario) {
        setUsuarioIdSeleccionado(String(bodegaAEditar.fkIdUsuario.idUsuario));
      }
    }
  }, [bodegaAEditar]);

  const opcionesSede = sedesDisponibles.map((sede) => ({
    label: sede.nombreSede,
    value: String(sede.idSedes),
  }));

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
    if (!sedeCompleta || !usuarioCompleto) return;
    const formData: Bodega = {
      ...bodegaAEditar,
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
      <h2 className="text-2xl font-bold">Editar Bodega</h2>
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
          planceholder="Seleccionar usuario" // Corregido
          items={opcionesUsuario}
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
          {isLoading ? "Actualizando..." : "Guardar Cambios"}
        </button>
      </div>
    </form>
  );
}