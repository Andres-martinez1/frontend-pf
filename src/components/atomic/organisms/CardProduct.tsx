import { CardBody, CardFooter, Image } from "@heroui/react";
import CustomCard from "../molecules/Card";
import CustomChip from "../atoms/Chip";
import { EyeIcon, ShoppingCartIcon } from "lucide-react";
import CustomModal from "../molecules/Modal";
import FormSolicitud from "./FormSolicitud";
import DetalleProducto from "./DetalleProducto";

type Props = {
  titlecard: string;
  image: string;
  description: string;
  footer?: React.ReactNode;
  classNameCard?: string;
  contenchip: string;
  stock: number;
  imageHeight?: string;
};

export default function CardProductDetail({
  titlecard,
  image,
  description,
  stock,
  contenchip,
  classNameCard = "max-w-sm w-full",
  imageHeight = "220px",
}: Props) {
  return (
    <div className={classNameCard}>
      <CustomCard conten="">
        <div
          className="relative w-full overflow-hidden rounded-xl"
          style={{ height: imageHeight }}
        >
          <Image
            src={image}
            alt={titlecard}
            className="object-cover w-full h-full"
          />
        </div>

        <CardBody className="pb-0 pt-4 px-4 flex-col items-start">
          <h3 className="font-bold text-lg">{titlecard}</h3>
        </CardBody>

        <CardBody className="px-4 pt-2">
          <div className="h-[60px] overflow-y-scroll scrollbar-hide text-default-600 text-sm mb-5">
            {description}
          </div>
          <div className="flex justify-between items-center w-full mb-3">
            <CustomChip conten={contenchip} color={""} />
            <CustomChip
              conten={`Stock: ${stock}`}
              color={"#BDFABD"}
              texcolor={"#096D09"}
            />
          </div>
        </CardBody>

        <div className="border-t border-gray-200 mx-4 my-2 mt-[-10px]" />

        <CardFooter className="gap-5 px-4 pb-4">
          <CustomModal
            content={
              <DetalleProducto
                imagen={
                  <img
                    src="/batidora.jpg"
                    alt="Batidora"
                    className="w-full h-full object-cover rounded-lg"
                  />
                }
                stock={5}
                descripcion="Batidora industrial de alta capacidad para preparaciones gastronómicas."
                categoria="Gastronomía"
                marca="Industrias Mix"
                numeroSerie="#456789XYZ"
                ubicacion="Depósito 3"
                bodega="Principal"
                estado="Disponible"
                estadoColor="text-green-600"
              />
            }
            title="Detalle del Producto"
            cancelLabel="Cerrar"
            confirmLabel="Solicitar Préstamo"
            ButtonLabel="Ver Detalle"
            BgColor="#F4F1F1"
            cancelBgColor="#F4F1F1"
            confirmBgColor="#131928"
            cancelTextColor="black"
            confirmTextColor="white"
            textColor="black"
            size="2xl"
            radius="lg"
            backdrop="opaque"
            placement="center"
            scrollBehavior="inside"
            shadow="lg"
            icon={<EyeIcon className="h-5 w-5" />}
          />

          <CustomModal
            content={<FormSolicitud />}
            title="Solicitar Préstamo"
            cancelLabel="Cancelar"
            confirmLabel="Solicitar Préstamo"
            ButtonLabel="Solicitar Préstamo"
            BgColor="#0F172A"
            cancelBgColor="#F4F1F1"
            confirmBgColor="#131928"
            cancelTextColor="black"
            confirmTextColor="white"
            textColor="white"
            size="2xl"
            radius="lg"
            backdrop="opaque"
            placement="center"
            scrollBehavior="inside"
            shadow="lg"
            icon={<ShoppingCartIcon className="h-5 w-5" />}
          />
        </CardFooter>
      </CustomCard>
    </div>
  );
}
