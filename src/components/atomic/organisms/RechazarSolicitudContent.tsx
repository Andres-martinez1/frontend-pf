import { XCircleIcon } from "@heroicons/react/24/solid";
import CustomTextarea from "../molecules/Textarea";

type RechazarSolicitudContentProps = {
  codigoSolicitud: string;
};

export default function RechazarSolicitudContent({ codigoSolicitud }: RechazarSolicitudContentProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-gray-600 text-sm">
          ¿Estás seguro de que deseas rechazar la solicitud {codigoSolicitud}?
        </p>
      </div>

      <div className="bg-red-50 border border-red-300 rounded-lg p-3 flex items-start gap-2">
        <XCircleIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
        <div>
          <p className="font-semibold text-red-700">La solicitud será rechazada</p>
          <p className="text-sm text-red-700">El usuario recibirá una notificación</p>
        </div>
      </div>

      <CustomTextarea
        titulo="Comentario (opcional)"
        placeholder="Agregar comentario sobre el rechazo..."
      />
    </div>
  );
}
