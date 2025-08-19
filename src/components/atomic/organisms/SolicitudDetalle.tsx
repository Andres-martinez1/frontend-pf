import CustomInput from "../molecules/Input";
import CustomTextarea from "../molecules/Textarea";

type Props = {
  codigoSolicitud:string;
  usuario: {
    nombre: string;
    correo: string;
  };
  producto: {
    nombre: string;
    categoria: string;
  };
  fechaSolicitud?: string;
  fechaDevolucion?: string;
  estado: string;
  prioridad: string;
  motivo: string;
  comentarios: string;
};

export default function FormSoli({
  usuario,
  producto,
  estado,
  prioridad,
  motivo,
  comentarios,
  codigoSolicitud
}: Props) {
  const estadoColors: Record<string, string> = {
    aprobada: "bg-green-100 text-green-700 border border-green-300",
    rechazada: "bg-red-100 text-red-700 border border-red-300",
    pendiente: "bg-yellow-100 text-yellow-700 border border-yellow-300"
  };

  const prioridadColors: Record<string, string> = {
    alta: "bg-red-100 text-red-700 border border-red-300",
    media: "bg-yellow-100 text-yellow-700 border border-yellow-300",
    baja: "bg-green-100 text-green-700 border border-green-300"
  };

  const categoriaColors: Record<string, string> = {
    tic: "bg-blue-100 text-blue-700 border border-blue-300",
    otro: "bg-gray-100 text-gray-700 border border-gray-300"
  };

  return (
    <><p className="text-gray-600 text-sm">
      Información completa de la solicitud  {codigoSolicitud}
    </p><div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-xl">
        <div className="rounded-lg p-3 border-1 border-gray-400 shadow-md">
          <label className="block text-sm font-semibold text-gray-600 ">Usuario</label>
          <div className="flex items-center gap-3 mt-2">
            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              {usuario.nombre.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{usuario.nombre}</p>
              <p className="text-sm text-gray-500">{usuario.correo}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-3 border-1 border-gray-400 shadow-md" >
          <label className="block text-sm font-semibold text-gray-600">Producto</label>
          <div className="flex flex-col mt-2 ">
            <span className="font-semibold">{producto.nombre}</span>
            <span
              className={`mt-1 px-2 py-1 rounded-full text-xs w-fit ${categoriaColors[producto.categoria.toLowerCase()] || categoriaColors.otro}`}
            >
              {producto.categoria}
            </span>
          </div>
        </div>

        <CustomInput label="Fecha de Solicitud" type="text" width="100%" className="border-1 border-gray-400 shadow-md rounded-lg"/>
        <CustomInput label="Fecha de Devolución" type="text" width="100%" className="border-1 border-gray-400 shadow-md rounded-lg"/>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Estado</label>
          <div
            className={`mt-2 px-3 py-1 rounded-lg text-sm w-fit ${estadoColors[estado.toLowerCase()] || "bg-gray-100 text-gray-700"}`}
          >
            {estado}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Prioridad</label>
          <div
            className={`mt-2 px-3 py-1 rounded-lg text-sm w-fit ${prioridadColors[prioridad.toLowerCase()] || "bg-gray-100 text-gray-700"}`}
          >
            {prioridad}
          </div>
        </div>

        <div className="col-span-2 border-1 border-gray-400 shadow-md rounded-lg">
          <CustomTextarea titulo="Motivo" placeholder={motivo}  />
        </div>

        <div className="col-span-2 border-1 border-gray-400 shadow-md rounded-lg">
          <CustomTextarea titulo="Comentarios del Usuario" placeholder={comentarios} />
        </div>
      </div></>
  );
}
