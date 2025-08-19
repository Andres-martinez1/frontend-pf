import { CardBody, CardFooter, Image } from "@heroui/react";
import CustomCard from "../molecules/Card";
import CustomChip from "../atoms/Chip";
import { EyeIcon, MapPin, User, Box, Calendar } from "lucide-react";
import CustomModal from "../molecules/Modal";
import BodegaDetalle from "./BodegaDetalle";

type Props = {
  titlecard: string;
  description: string;
  encargado: string;
  items: number;
  estado: string;
  estadoColor: string;
  icon?: React.ReactNode;
  image?: string;
  ubicacion?: string;
  ultimaActualizacion?: string;
  imageHeight?: string;
};

export default function CardBodega({
  titlecard,
  description,
  encargado,
  items,
  estado,
  estadoColor,
  icon,
  image,
  ubicacion = "No definida",
  ultimaActualizacion = "Hace poco",
  imageHeight = "150px",
}: Props) {
  return (
    <div className="max-w-sm w-full">
      <CustomCard conten="">
        {/* Imagen con chip estado */}
        <div
          className="relative w-full overflow-hidden rounded-t-xl"
          style={{ height: imageHeight }}
        >
          {image ? (
            <Image
              src={image}
              alt={titlecard}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-400">
              {icon}
            </div>
          )}

          {/* Estado en la esquina */}
          <div className="absolute top-3 right-3">
            <CustomChip
              conten={estado}
              texcolor="white"
              color={estadoColor}
              className="text-xs font-medium shadow"
            />
          </div>
        </div>

        {/* Título y descripción */}
        <CardBody className="pb-0 pt-4 px-4 flex-col items-start">
          <h3 className="font-bold text-lg">{titlecard}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </CardBody>

        {/* Datos de detalle con etiquetas */}
        <CardBody className="px-4 pt-3 space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-gray-500 font-medium">Ubicación:</span>
            <span>{ubicacion}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-gray-500" />
            <span className="text-gray-500 font-medium">Encargado:</span>
            <span>{encargado}</span>
          </div>
          <div className="flex items-center gap-2">
            <Box className="h-4 w-4 text-gray-500" />
            <span className="text-gray-500 font-medium">Items:</span>
            <span>{items}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-gray-500 font-medium">Actualización:</span>
            <span>{ultimaActualizacion}</span>
          </div>
        </CardBody>

        <CardFooter className="flex justify-between items-center px-4 pb-4 mt-3">
  <CustomModal
    content={
      <div className="max-h-[80vh] overflow-y-auto space-y-6 p-4">
        <BodegaDetalle
          nombreBodega="TIC"
          estado="Activo"
          descripcion="Servidores, equipos de red y sistemas de almacenamiento."
          encargado={{
            nombre: "Carlos Pérez",
            cargo: "Administrador de TI",
            email: "carlos@empresa.com",
            telefono: "+51 999 888 777",
          }}
          detalles={{
            ubicacion: "Edificio Central - Piso 2",
            fechaCreacion: "01/01/2020",
            ultimaActualizacion: "15/08/2025",
            totalItems: 98,
          }}
          inventario={{
            total: 98,
            disponibles: 75,
            prestamo: 15,
            stockBajo: 8,
            estado: "Operativo",
            capacidad: "120 items",
            ultimaAuditoria: "Julio 2025",
          }}
          productos={[
            {
              titlecard: "Laptop UltraBook Pro",
              image: "/laptop.jpg",
              description:
                "Laptop de alto rendimiento para trabajo y estudio.",
              stock: 50,
              contenchip: "Computadoras",
            },
            {
              titlecard: "Servidor Dell PowerEdge",
              image: "/server.jpg",
              description:
                "Servidor empresarial con gran capacidad de procesamiento.",
              stock: 8,
              contenchip: "Servidores",
            },
          ]}
        />
      </div>
    }
    title={`Detalle de ${titlecard}`}
    cancelLabel="Cerrar"
    confirmLabel="Aceptar"
    ButtonLabel="Ver detalles"
    BgColor="#F4F1F1"
    cancelBgColor="#F4F1F1"
    confirmBgColor="#131928"
    cancelTextColor="black"
    confirmTextColor="white"
    textColor="black"
    size="5xl"
    radius="lg"
    backdrop="opaque"
    placement="center"
    scrollBehavior="inside"
    shadow="lg"
    icon={<EyeIcon className="h-5 w-5" />}
    className="max-w-6xl w-full"
  />
</CardFooter>

      </CustomCard>
    </div>
  );
}
