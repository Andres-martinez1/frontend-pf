import CustomChip from "../atoms/Chip";

type Props = {
  imagen?: React.ReactNode;
  stock: number;
  descripcion: string;

  categoria: string;
  marca: string;
  numeroSerie: string;

  ubicacion: string;
  bodega: string;
  estado: string;
  estadoColor?: string;
};

export default function DetalleProducto({
  imagen,
  stock,
  descripcion,
  categoria,
  marca,
  numeroSerie,
  ubicacion,
  bodega,
  estado,
  estadoColor = "text-green-600",
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-6">
      <div className="flex flex-col items-center md:items-start space-y-4">
        <div className="w-full h-48 rounded-lg border border-gray-300 bg-gray-100 flex items-center justify-center shadow-sm text-gray-500">
          {imagen ?? "Imagen"}
        </div>

        <CustomChip
          conten={`Stock: ${stock}`}
          color={"#BDFABD"}
          texcolor={"#096D09"}
        />

        <p className="text-sm text-gray-600 text-justify leading-relaxed">
          {descripcion}
        </p>
      </div>

      <div className="flex flex-col justify-between text-sm text-gray-800 space-y-6">
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            Información del Producto
          </h3>
          <div className="space-y-1">
            <p>
              <span className="font-medium">Categoría:</span> {categoria}
            </p>
            <p>
              <span className="font-medium">Marca:</span> {marca}
            </p>
            <p>
              <span className="font-medium">Número de Serie:</span>{" "}
              {numeroSerie}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            Información de Almacenamiento
          </h3>
          <div className="space-y-1">
            <p>
              <span className="font-medium">Ubicación:</span> {ubicacion}
            </p>
            <p>
              <span className="font-medium">Bodega:</span> {bodega}
            </p>
            <p>
              <span className="font-medium">Estado:</span>{" "}
              <span className={`${estadoColor} font-semibold`}>{estado}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
