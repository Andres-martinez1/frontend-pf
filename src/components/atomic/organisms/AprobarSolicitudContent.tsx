import { CheckCircleIcon } from "@heroicons/react/24/solid";
import CustomTextarea from "../molecules/Textarea";

type AprobarSolicitudContentProps = {
  codigoSolicitud: string;
};

export default function AprobarSolicitudContent({ codigoSolicitud }: AprobarSolicitudContentProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-gray-600 text-sm">
          ¿Estás seguro de que deseas aprobar la solicitud {codigoSolicitud}?
        </p>
      </div>

      <div className="bg-green-50 border border-green-300 rounded-lg p-3 flex items-start gap-2">
        <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
        <div>
          <p className="font-semibold text-green-700">La solicitud será aprobada</p>
          <p className="text-sm text-green-700">El usuario recibirá una notificación</p>
        </div>
      </div>

      <CustomTextarea
        titulo="Comentario (opcional)"
        placeholder="Agregar comentario sobre la aprobación..."
      />
    </div>
  );
}
