import { useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import CustomTextarea from "../molecules/Textarea";
import { Button } from "@heroui/react";

// Hooks
import { useAreas } from "../../../hooks/Areas/useAreas";
import { useBodegas } from "../../../hooks/Bodegas/useBodegas";
import { useCentros } from "../../../hooks/Centros/useCentros";
import { useElementos } from "../../../hooks/Elementos/useElementos";
import { useFichas } from "../../../hooks/Ficha/useFicha";
import { useMunicipios } from "../../../hooks/Municipios/useMunicipios";
import { useProgramas } from "../../../hooks/Programas/useProgramas";
import { useRoles } from "../../../hooks/Roles/useRoles";
import { useSedes } from "../../../hooks/Sedes/useSedes";

type EliminarItemContentProps = {
  entityLabel: string;
  itemName: string;
  itemId: number;
  category: string;
  warningMessage?: string;
  withComment?: boolean;
  onSuccess?: () => void;
};

export default function EliminarItemContent({
  entityLabel,
  itemName,
  itemId,
  category,
  warningMessage,
  withComment = false,
  onSuccess,
}: EliminarItemContentProps) {
  const [comment, setComment] = useState("");

  // Mapeamos categoría → hook y la mutación específica de eliminación
  const deleteHooksMap: Record<
    string,
    { hook: () => any; deleteKey: string }
  > = {
    areas: { hook: useAreas, deleteKey: "eliminarArea" },
    bodegas: { hook: useBodegas, deleteKey: "eliminarBodega" },
    centros: { hook: useCentros, deleteKey: "eliminarCentro" },
    elementos: { hook: useElementos, deleteKey: "eliminarElemento" },
    fichas: { hook: useFichas, deleteKey: "eliminarFicha" },
    municipios: { hook: useMunicipios, deleteKey: "eliminarMunicipio" },
    programas: { hook: useProgramas, deleteKey: "eliminarPrograma" },
    roles: { hook: useRoles, deleteKey: "eliminarRol" },
    sedes: { hook: useSedes, deleteKey: "eliminarSede" },
  };

  const hookInfo = deleteHooksMap[category];

  if (!hookInfo) {
    console.warn(`No se encontró hook para la categoría ${category}`);
    return null;
  }

  const hook = hookInfo.hook();
  const deleteMutation = hook[hookInfo.deleteKey];

  if (!deleteMutation || typeof deleteMutation.mutate !== "function") {
    console.warn(`No se encontró mutación de eliminación para ${entityLabel}`);
    return null;
  }

  const handleDelete = () => {
    deleteMutation.mutate(itemId, {
      onSuccess: () => {
        if (onSuccess) onSuccess();
      },
      onError: (err: any) => console.error("Error al eliminar:", err),
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-gray-600 text-sm">
          ¿Estás seguro de que deseas eliminar el {entityLabel.toLowerCase()}{" "}
          <span className="font-semibold">{itemName}</span>?
        </p>
      </div>

      <div className="bg-red-50 border border-red-300 rounded-lg p-3 flex items-start gap-2">
        <ExclamationTriangleIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
        <div>
          <p className="font-semibold text-red-700">
            Esta acción es irreversible
          </p>
          <p className="text-sm text-red-700">
            El {entityLabel.toLowerCase()} será eliminado permanentemente.
          </p>
          {warningMessage && (
            <p className="text-sm text-red-600 mt-1">{warningMessage}</p>
          )}
        </div>
      </div>

      {withComment && (
        <CustomTextarea
          titulo="Comentario (opcional)"
          placeholder={`Agregar comentario sobre la eliminación del ${entityLabel.toLowerCase()}...`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      )}

      <div className="flex justify-end">
        <Button color="danger" onClick={handleDelete}>
          Eliminar
        </Button>
      </div>
    </div>
  );
}
