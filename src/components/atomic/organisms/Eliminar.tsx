import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

type EliminarItemContentProps = {
  title: string;
  itemName: string; 
  warningMessage?: string; 
};

export default function EliminarItemContent({
  title,
  itemName,
  warningMessage,
}: EliminarItemContentProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-gray-600 text-sm">
          ¿Estás seguro de que deseas eliminar el {title.toLowerCase()}{" "}
          <span className="font-semibold">{itemName}</span>?
        </p>
      </div>

      <div className="bg-red-50 border border-red-300 rounded-lg p-3 flex items-start gap-2">
        <ExclamationTriangleIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
        <div>
          <p className="font-semibold text-red-700">
            Esta acción no se puede deshacer
          </p>
          <p className="text-sm text-red-700">
            El {title.toLowerCase()} será eliminado permanentemente.
          </p>
          {warningMessage && (
            <p className="text-sm text-red-600 mt-1">{warningMessage}</p>
          )}
        </div>
      </div>

    </div>
  );
}
